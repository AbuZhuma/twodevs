import { scrollToElement } from "../../../shared/helpers"
import CustomButton from "../../../shared/ui/button/CustomButton"
import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom"

const CreateRoom = () => {
      const navigate = useNavigate()

      return (
            <div className={styles.container}>
                  <CustomButton text="Get started!" size={60} onClick={async () => {
                        navigate("/")
                        setTimeout(() => {
                              scrollToElement("fb")
                        }, 300)
                  }} />
            </div>
      )
}

export default CreateRoom
