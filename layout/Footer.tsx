import styles from "@/layout/Footer.module.css"
const Footer = () => {
  return (
	<footer className={styles.footer}>
    <div className={styles.faux}>
      <h2 className="">Fauxica</h2>
      <span className="">Premium Apparel</span>
      <span className="">fauxical@examplemail.com</span>
    </div>
    <ul className="">
      <li className={styles.link}>LEGAL</li>
      <li className={styles.link}>Privacy Policy</li>
      <li className={styles.link}>Legal notice</li>
      <li className={styles.link}>Terms</li>
    </ul>
    <ul className="">
      <li className={styles.link}>SUPPORT</li>
      <li className={styles.link}>Returns</li>
      <li className={styles.link}>FAQS</li>
      <li className={styles.link}>Contact</li>
    </ul>
    <div className={styles.subscribe}>
     <div >
     <h3 className={styles.subscribeText}>SUBSCRIBE TO OUR NEWSLETTER</h3>
      <p className={styles.subscribeP}>Be the first to know about our deals and member benefits!</p>
     </div>
      <div className={styles.mail}>
        <input type="email"  placeholder="your email address " />
        <button className="">SUBSCRIBE</button>
      </div>
    </div>
    </footer>
  )
}

export default Footer