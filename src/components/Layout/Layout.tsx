import { FC, PropsWithChildren, useState, useEffect } from 'react'
import styles from './Layout.module.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import FooterAdaptive from '@/components/FooterAdaptive/FooterAdaptive'
import { LayoutPropsTypes } from '@/components/Layout/types'
import Meta from '@/components/Layout/Meta'
import useWindowWidth from '@/hooks/useWindowWidth'

const Layout: FC<PropsWithChildren<LayoutPropsTypes>> = ({
	title,
	keywords,
	description,
	children,
}) => {
	const [domLoaded, setDomLoaded] = useState(false)
	const windowWidth = useWindowWidth()
	useEffect(() => {
		setDomLoaded(true)
	}, [])

	return (
		<>
			{domLoaded && (
				<Meta
					title={title}
					keywords={keywords ? keywords : ''}
					description={description ? description : ''}
				>
					<Header />
					<main className={styles.main}>{children}</main>

					{windowWidth > 1024 ? <Footer /> : <FooterAdaptive />}
				</Meta>
			)}
		</>
	)
}

export default Layout
