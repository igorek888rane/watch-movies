import Layout from '@/components/Layout/Layout'
import MoviesContainer from '@/components/MoviesContainer/MoviesContainer'

export default function Movies() {
	return (
		<Layout title={'MoviesPage'}>
			<MoviesContainer />
		</Layout>
	)
}