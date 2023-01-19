import styles from "./Homepage.module.css"
import Project from "../../components/Project/Project"

export default function Hompage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}><strong><h1>PROJECTS</h1><br /></strong> </div>
        <div className={styles.display00}></div>
        <div className={styles.display01}></div>
        <Project />
      </div>
    </>
  )
}