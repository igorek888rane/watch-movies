import Layout from '@/components/Layout/Layout'
import MovieCard from '@/components/MovieCard/MovieCard'
import Slider from '@/components/UI/Slider/Slider'
import { useAppSelector } from '@/hooks/useApp'

export default function Home() {
	const { movies } = useAppSelector(state => state.movies)
	return (
		<Layout title={'HomePage'}>
			<div className='container'>
				<Slider widthItem={153} count={10}>
					{movies.map(movie => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</Slider>
			</div>
		</Layout>
	)
}
