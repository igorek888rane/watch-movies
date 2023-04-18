import { FC, PropsWithChildren } from 'react'
import { LayoutPropsTypes } from '@/components/Layout/types'
import Head from 'next/head'

const Meta: FC<PropsWithChildren<LayoutPropsTypes>> = ({
	title,
	keywords,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={`Фильмы, ` + keywords} />
				<meta
					name='description'
					content={`Портал для просмотра фильмов. ` + description}
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/public/favicon.ico' />
			</Head>
			{children}
		</>
	)
}

export default Meta