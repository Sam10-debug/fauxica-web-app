import { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'
type Props={
	children:ReactNode
}
const Layout = ({children}:Props) => {
  return (
	<section>
		<Nav></Nav>
		{children}
		<Footer></Footer>
	</section>
  )
}

export default Layout