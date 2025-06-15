import { useState } from "react"
import CustomButton from "../../../shared/ui/button/CustomButton"
import CustomInput from "../../../shared/ui/input/CustomInput"
import styles from "./styles.module.css"

const CreateRoom = () => {
      const [req, setReq] = useState("")
      return (
            <div className={styles.container}>
                  <CustomInput size={40} state={req} setState={setReq} placeholder="You`r request" />
                  <div className={styles.btns}>
                        <CustomButton text="Simple request" size={60}/>
                  </div>
            </div>
      )
}

export default CreateRoom
