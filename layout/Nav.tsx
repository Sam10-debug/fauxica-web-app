import { SVGProps, useRef } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styles from "@/layout/Nav.module.css"

const Nav = () => {
	const navRef= useRef<HTMLElement>(null)
	const first= useRef<SVGSVGElement>(null)
	const second= useRef<SVGSVGElement>(null)
	const third= useRef<SVGSVGElement>(null)
	const router=useRouter()
	const navLinks=[
		{
		title: "Home",path: "/components/",
	},
		{
		title: "Products",path: "/components/product",
	},
		{
		title: "Gallery",path: "/components/gallery",
	},
		{
		title: "Contacts",path: "/components/contact",
	},
]
const handleNav=()=>{
	navRef?.current?.classList.toggle("showNav")
	first?.current?.classList.toggle("show")
	second?.current?.classList.toggle("remove")
	third?.current?.classList.toggle("showw")
}
const mappedNavLinks = navLinks.map(navLink =><li key={navLink.title} className={ router.pathname===navLink.path?"active":""}><Link href={navLink.path}>{navLink.title}</Link></li>)
  return (
	<header className={styles.header}>

		<div onClick={handleNav}  className={styles.hamburger}>
			<svg ref={first} width="21" className=" " height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<svg ref={second} width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
			<svg ref={third} width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1.38647 1H19.3865" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
		<div className={styles.logo}>
			<h3 className="">Fauxica</h3>
			<span className={styles.premium}>Premium Apparel</span>
		</div>
			<nav ref={navRef} className={styles.nav}>
				<ul className={styles.ul}>
					{mappedNavLinks}
				</ul>
			</nav>
	</header>
  )
}

export default Nav