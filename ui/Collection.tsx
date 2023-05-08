import styles from "./Collection.module.css"
import ImageData from "@/data/ImageData"
import CollectionDiv from "./CollectionDiv"

const Collection = () => {
  const ImageComp= ImageData.map(data=>(
    <CollectionDiv img={data} key={data} />
  ))
  return (
	<section className={styles.mainDiv}>
    <h2 className={styles.heading}>Collections</h2>
    <section className={styles.grid}>
      {ImageComp}
    </section>
  </section>
  )
}

export default Collection