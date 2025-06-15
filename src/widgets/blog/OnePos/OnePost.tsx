import { useState } from "react";
import styles from "./styles.module.css";

const OnePost = ({
  title,
  date,
  author,
  description,
  changelog
}: {
  title: string;
  date: string;
  author: string;
  description: string;
  changelog: string[];
}) => {
  const [reaction, setReaction] = useState<string | null>(null);
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleCopyChangelog = () => {
    const changelogText = changelog.join("\n- ");
    navigator.clipboard.writeText(`Changelog:\n- ${changelogText}`);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  const handleSubmitFeedback = () => {
    console.log({
      reaction,
      isHelpful,
      feedbackText
    });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsFeedbackOpen(false);
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <h2 className={styles.postTitle}>
          {title}
        </h2>
        <span className={styles.postMeta}>
          Published on {date} by {author}
        </span>
      </div>

      <div className={styles.postDescription}>
        <p>{description}</p>
      </div>

      <div className={styles.changelog}>
        <div className={styles.changelogHeader}>
          <h3>Changelog:</h3>
          <button 
            onClick={handleCopyChangelog}
            className={styles.copyButton}
            title="Copy changelog"
          >
            ⎘ Copy
          </button>
        </div>
        <ul>
          {changelog.map((change, index) => (
            <li key={index}>{change}</li>
          ))}
        </ul>
        {showCopyNotification && (
          <div className={styles.copyNotification}>Copied to clipboard!</div>
        )}
      </div>
      
      <div className={styles.reactions}>
        <h4>How do you feel about this update?</h4>
        <div className={styles.reactionButtons}>
          {["👍", "👎", "❤️", "🚀", "🎉", "🤔"].map((emoji) => (
            <button
              key={emoji}
              onClick={() => setReaction(emoji)}
              className={reaction === emoji ? styles.active : ""}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.feedbackContainer}>
        <button 
          className={styles.feedbackToggle}
          onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}
        >
          {isFeedbackOpen ? "▲ Hide feedback form" : "▼ Leave detailed feedback"}
        </button>
        
        {isFeedbackOpen && (
          <div className={styles.feedbackForm}>
            {!isSubmitted ? (
              <>
                <div className={styles.feedbackQuestion}>
                  <p>Was this update helpful?</p>
                  <div className={styles.feedbackButtons}>
                    <button
                      onClick={() => setIsHelpful(true)}
                      className={isHelpful === true ? styles.active : ""}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setIsHelpful(false)}
                      className={isHelpful === false ? styles.active : ""}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className={styles.feedbackTextarea}>
                  <textarea
                    placeholder="Your detailed feedback (optional)..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                  />
                </div>

                <button
                  onClick={handleSubmitFeedback}
                  className={styles.submitButton}
                  disabled={isHelpful === null}
                >
                  Submit Feedback
                </button>
              </>
            ) : (
              <div className={styles.thankYouMessage}>
                <span>✅</span>
                <p>Thank you for your feedback!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OnePost;