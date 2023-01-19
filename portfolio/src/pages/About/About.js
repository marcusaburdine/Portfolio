import styles from "./About.module.css"

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}></div>
        <div className={styles.profile}></div>

        <div className={styles.title}>
          <strong><h1>MARCUS<br />BURDINE</h1><br/></strong>
        </div>

        <div className={styles.about}>
        <h3>ABOUT</h3>
         <p>Hello, I'am currently seeking the opportunity to join a company with a strong community. My leadership skills allow me to work efficiently within a team to achieve a common goal. My customer service background allows me to deliver a quality product that meets client expectations.</p>
        </div>

        <div className={styles.contact}>
          <h3>CONTACT</h3>
          <p>
          <strong>PHONE:</strong> 513.501.5557<br />
          <strong>EMAIL:</strong> marcus.burdine@gmail.com<br />
          <strong>FACEBOOK:</strong> <a href="https://www.facebook.com/marcus.burdine">Marcus Alan Burdine</a> <br />
          <strong>LINKEDIN:</strong> <a href="https://www.linkedin.com/in/marcus-burdine">linkedin.com/in/marcus-burdine</a><br />
          <strong>GITHUB:</strong> <a href="https://github.com/marcusaburdine">github.com/marcusaburdine</a><br />
          <strong>RESUME:</strong> <a href="https://docs.google.com/document/d/1b8RrRjiQJieKytlvoY-U-Vr9bxlnGNqs9tY8sQgzREo/edit">Marcus Alan Burdine</a><br />
          </p>
        </div>
      </div>
    </>
  )
}

