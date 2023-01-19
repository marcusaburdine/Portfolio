import styles from "./Navigation.module.css"
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className={styles.navigation} >
        <div className={styles.about}>
          <Link to="/about">
            <strong>About</strong>
          </Link>
        </div>

        <div className={styles.home}>
          <Link to="/">
            <strong>Home</strong>
          </Link>
        </div>
      </nav>
    </>
  )
}