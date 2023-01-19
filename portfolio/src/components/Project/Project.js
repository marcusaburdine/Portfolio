import styles from "./Project.module.css"
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <>
      <div className={styles.project01}>
        <div className={styles.display01}></div>
        <div className={styles.title}></div><strong>Battle Pets</strong><br/>
        <a href="https://github.com/marcusaburdine/PROJECT-1">Github</a> |   <a href="https://peppy-squirrel-62cd4d.netlify.app">Netlify</a>
      </div>

      <div className={styles.project02}>
        <div className={styles.display02}></div>
        <div className={styles.title}></div><strong>PokeDex</strong><br/>
        <a href="https://github.com/marcusaburdine/REACT-MERN/tree/main/react-mern-app">Github</a> |   <a href="https://benevolent-snickerdoodle-562062.netlify.app">Netlify</a>
      </div>

      <div className={styles.project03}>
        <div className={styles.display03}></div>
        <div className={styles.title}></div><strong>Jeopardy</strong><br/>
        <a href="https://github.com/marcusaburdine/Jeopardy">Github</a> |   <a href="https://illustrious-pavlova-82d052.netlify.app">Netlify</a>
      </div>
    </>
  )
}