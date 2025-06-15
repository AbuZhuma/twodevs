import { FormEvent, useState } from "react"
import CustomInput from "../../../shared/ui/input/CustomInput"
import styles from "./styles.module.css"
import OneSecton from "../../../shared/ui/oneSection/OneSecton"
import CustomButton from "../../../shared/ui/button/CustomButton"
import CustomTextArea from "../../../shared/ui/input/CustomTextArea"
import NetsAnimation from "../netsAnimation/NetsAnimation"
import axios from "axios"
import LoadingSpinner from "../../../shared/ui/laodingSpinner/LoadingSpinner"
import { api } from "../../../shared/api"

const Feadback = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [load, setLoad] = useState("def")
  const postFb = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoad("load")
      const res = await axios.post(`${api}/feabdacks`, { text: message, email: email, title:"New Order Received!" }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(res);
      setLoad("sendet")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <OneSecton title="Place an order" className={styles.feedback}>
      {load === "def" ?
        <div className={styles.inner} id="fb">
          <form className={styles.form} onSubmit={(e) => postFb(e)}>
            <CustomInput placeholder="example@gmail.com" size={40} state={email} setState={setEmail} label="You`r email" />
            <CustomTextArea placeholder="Hello!
I need a website developed from scratch. Please review the requirements and let me know the time frame and cost.
" size={200} state={message} setState={setMessage} label="Write you`r message" />
            <CustomButton size={60} text="Send message" />
          </form>
          <div className={styles.nets}>
            <NetsAnimation />
          </div>
        </div>
        : null}
      {load === "load" ?
        <LoadingSpinner />
        : null}
      {load === "sendet" ?
        <div className={styles.successMessage}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4CAF50" />
          </svg>
          <h3>Thank You for Your Message!</h3>
          <p>We've received your message and will get back to you soon.</p>
          <button
            className={styles.backButton}
            onClick={() => {
              setLoad("def");
              setEmail("");
              setMessage("");
            }}
          >
            Send Another Message
          </button>
        </div>
        : null}
    </OneSecton>
  )
}

export default Feadback
