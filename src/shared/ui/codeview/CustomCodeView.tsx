import { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface CustomCodeViewProps {
      text: string;
      language?: string;
      showLineNumbers?: boolean;
      size?: number;
      max?: boolean;
      isCopy?: boolean;
      isAnimate?: boolean,
      delay?: number,
      speed?: number
}

const CustomCodeView = ({
      text,
      language = 'terminal',
      showLineNumbers = true,
      size,
      max = false,
      isCopy = true,
      isAnimate = false,
      delay = 0,
      speed = 50
}: CustomCodeViewProps) => {
      const [isCopied, setIsCopied] = useState(false);
      const [code, setCode] = useState<string[]>([]);

      const handleCopy = () => {
            navigator.clipboard.writeText(code.join()).then(() => {
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 2000);
            });
      };

      const tokenizeLine = (line: string) => {
            const tokens = line.split(
                  /(\b(?:const|npm|npx|install|start|let|var|function|return|if|else|for|while|switch|case|break|continue|class|import|from|export|default|new|try|catch|throw|extends|implements|interface|type|typeof|instanceof|in)\b|\/\/.*|".*?"|'.*?'|`.*?`|\b\d+(\.\d+)?\b|===|!==|==|!=|<=|>=|=>|[-+*/%=<>]|[{}()\[\]<>.,;])/g
            );

            return tokens.map((token, i) => {
                  let className = '';

                  if (/^\/\/.*/.test(token)) className = styles.comment;

                  else if (/^(['"`]).*\1$/.test(token)) className = styles.string;

                  else if (/^\d+(\.\d+)?$/.test(token)) className = styles.number;

                  else if (
                        /\b(const|npm|npx|let|var|function|return|if|else|for|while|switch|case|break|continue|class|import|from|export|default|new|try|catch|throw|extends|implements)\b/.test(token)
                  )
                        className = styles.keyword;

                  else if (
                        /\b(number|install|i|init|start|string|boolean|void|any|never|unknown|undefined|null|object|interface|type|typeof|instanceof|in)\b/.test(token)
                  )
                        className = styles.type;

                  else if (/^(===|!==|==|!=|<=|>=|=>|[-+*/%=])$/.test(token)) className = styles.operator;

                  else if (/^[{}\[\]()<>]$/.test(token)) className = styles.bracket;

                  else if (i > 0 && tokens[i - 1] === 'function') className = styles.function;

                  return (
                        <span key={i} className={className}>
                              {token}
                        </span>
                  );
            });
      };
      function typer(): NodeJS.Timeout {
            const splited = text.split("\n")
            let i = 0;
            let charI = 0;
            let cod = "";

            const startTyping = () => {
                  const interval = setInterval(() => {
                        if (i >= splited.length) {
                              clearInterval(interval);
                              return;
                        }

                        if (charI < splited[i].length) {
                              const el = splited[i][charI];
                              cod += el;
                              setCode(cod.split("\n"));
                              charI++;
                        } else {
                              if (splited.length > i+2) {
                                    cod += "\n";
                              }
                              setCode(cod.split("\n"));
                              i++;
                              charI = 0;
                        }
                  }, speed);

                  return interval;
            };

            if (delay > 0) {
                  const timeout = setTimeout(() => {
                        startTyping();
                  }, delay);

                  return timeout
            } else {
                  return startTyping();
            }
      }

      useEffect(() => {
            if (isAnimate) {
                  const interval = typer()
                  return () => {
                        clearInterval(interval);
                  }
            } else {
                  setCode(text.split("\n"))
            }

      }, []);
      return (
            <div
                  className={styles.codeContainer}
                  style={
                        max
                              ? { maxWidth: size ? `${size * 5}px` : '100%' }
                              : { width: size ? `${size * 5}px` : '100%' }
                  }
            >
                  <div className={styles.codeHeader}>
                        <span className={styles.languageTag}>{language}</span>
                        {isCopy && (
                              <button
                                    onClick={handleCopy}
                                    className={styles.copyButton}
                                    style={isCopied ? { color: 'rgb(29, 255, 29)' } : {}}
                                    aria-label="Copy code"
                              >
                                    {isCopied ? 'Copied!' : 'Copy'}
                              </button>
                        )}
                  </div>

                  <div className={styles.codeWrapper}>
                        {showLineNumbers && (
                              <div className={styles.lineNumbers}>
                                    {code.map((_, i) => (
                                          <span key={i} className={styles.lineNumber}>
                                                {i + 1}
                                          </span>
                                    ))}
                              </div>
                        )}

                        <pre className={styles.codeBlock}>
                              <code>
                                    {code.map((line, i) => (
                                          <div key={i} className={styles.codeLine}>
                                                {tokenizeLine(line)}
                                          </div>
                                    ))}
                              </code>
                        </pre>
                  </div>
            </div>
      );
};

export default CustomCodeView;
