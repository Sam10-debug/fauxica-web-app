import styles from "./Collection.module.css"
import Image from "next/image"
type Props={
	img:string,
	key:string
}
const CollectionDiv = ({img}:Props) => {
  return (
	<div className={styles.div}>
		<Image src={img} width={200} height={200} alt="grid-image" />
		<h4 className={styles.summer}>'23 summer collection</h4>
		<button className={styles.btn}>VIEW COLLECTION</button>
	</div>
  )
}

export default CollectionDiv