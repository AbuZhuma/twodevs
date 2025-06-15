import { useEffect, useState } from "react";
import OneSection from "../../../shared/ui/oneSection/OneSecton";
import styles from "./styles.module.css";
import axios from "axios";
import { api } from "../../../shared/api";
import { useLayoutStore } from "../../../layout/api";

interface IFeedback {
      _id: string;
      text: string;
      email: string;
      date: string;
      __v: number;
}

const AdminFeedbacks = () => {
      const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
      const {setAllert} = useLayoutStore()
      const getFeedbacks = async () => {
            try {
                  const res = await axios.get(`${api}/feabdacks/`);
                  setFeedbacks(res.data);
            } catch (error) {
                  console.error("Error fetching feedbacks:", error);
                  setAllert("Failed to load feedbacks. Please try again later.", "error");
            }
      };

      useEffect(() => {
            getFeedbacks();
      }, []);

      const formatDate = (dateString: string) => {
            return new Date(dateString).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
            });
      };

      return (
            <OneSection title="Feedbacks" className={styles.main}>
                  <div className={styles.container}>
                        <div className={styles.feedbackList}>
                              {feedbacks.map((feedback) => (
                                    <div key={feedback._id} className={styles.feedbackItem}>
                                          <div className={styles.feedbackHeader}>
                                                <div className={styles.email}>{feedback.email}</div>
                                                <div className={styles.date}>{formatDate(feedback.date)}</div>
                                          </div>
                                          <div className={styles.text}>{feedback.text}</div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </OneSection>
      );
};

export default AdminFeedbacks;