import { FC, ReactNode } from 'react'
import styles from "./styles.module.css"

interface IPostsList{
      children: ReactNode
}

const PostsList:FC<IPostsList> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
            {children} 
      </div>
    </div>
  )
}

export default PostsList
