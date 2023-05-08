import styles from "@/pages/components/Home.module.css"
import Collection from "@/ui/Collection"

const HomePage = () => {
  return (
	<section className="">
      <section className={styles.main}>
      <section className={styles.textDiv}>
        <h1 className={styles.quality}>Quality apparel <br></br> without the price tag.</h1>
        <p className={styles.text}>No need to spend $xxxx on apparel just for the name&apos;s sake.
          Our premium apparel is made from the same material.</p>
          <div className={styles.buttonDiv}>
            <button className="">Browse our collecions</button>
            <button className="">23 summer collection</button>
          </div>
          <div className={styles.box}>
              <p>In celebration of our <span>10th</span> year anniversary, you can now get up to <span>70%</span> off all  apparels, including 
              clothing, shoes and accessories! </p>
          </div>
      </section>
      <div className={styles.imgDiv}>
        <img src="/images/Rectangle 1.png" alt="main-image" />
      </div>
    </section>
    <Collection />
  </section>
  )
}

export default HomePage