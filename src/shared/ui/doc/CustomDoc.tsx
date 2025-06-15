import { FC } from "react";
import styles from "./styles.module.css";
import CustomCodeView from "../codeview/CustomCodeView";

interface ICustomDoc {
  size: number;
  content: DocElement[];
}

type DocElement = {
  tag: string;
  text: string;
  lang?: string;
  links?: { url: string; text: string }[];
};

const CustomDoc: FC<ICustomDoc> = ({ size, content }) => {
  const parseTextWithLinks = (text: string) => {
    const linkRegex = /!link#([^#]+)#([^!]+)!/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      parts.push(
        <a
          href={match[1]}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          key={`link-${lastIndex}`}
        >
          {match[2]}
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };
  console.log(content);
  
  return (
    <div className={styles.container} style={{ maxWidth: `${size}px`, width: '100%' }}>
      {content.map((el, index) => {
        switch (el.tag) {
          case "h1":
            return (
              <h1 key={index} className={styles.h1}>
                {parseTextWithLinks(el.text)}
              </h1>
            );
          case "h2":
            return (
              <h2 key={index} className={styles.h2}>
                {parseTextWithLinks(el.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={index} className={styles.h3}>
                {parseTextWithLinks(el.text)}
              </h3>
            );
          case "text":
            return (
              <p key={index} className={styles.text}>
                {parseTextWithLinks(el.text)}
              </p>
            );
          case "code":
            return (
              <CustomCodeView
                max={true}
                key={index}
                size={100}
                text={el.text}
                language={el.lang}
                showLineNumbers={false}
              />
            );
          case "img":
            return <img crossOrigin="anonymous" className={styles.img} src={`${el.text}`} alt="" />
          default:
            return null;
        }
      })}
    </div>
  );
};

export default CustomDoc;