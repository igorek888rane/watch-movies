import React, { FC } from 'react'
import styles from './Person.module.scss'
import Button from '@/components/UI/Button/Button'
import PersonFilms from '@/components/PersonFilms/PersonFilms'
import arrowIconBack from '../../assets/img/icons/arrow-back.svg'

const Person: FC = () => {
	const [isTaglineOpen, setTaglineOpen] = React.useState(false)
	const [isBioTextOpen, setBioTextOpen] = React.useState(false)
	const [isAllSelected, setAllSelected] = React.useState(true)
	const [isAсtorSelected, setAсtorSelected] = React.useState(false)
	const [isProducerSelected, setProducerSelected] = React.useState(false)

	function toggleTaglineText() {
		setTaglineOpen(!isTaglineOpen)
	}

	function toggleBioText() {
		setBioTextOpen(!isBioTextOpen)
	}

	function selectSwitcherAll() {
		setAllSelected(true)
		setAсtorSelected(false)
		setProducerSelected(false)
	}
	function selectSwitcherActor() {
		setAllSelected(false)
		setAсtorSelected(true)
		setProducerSelected(false)
	}
	function selectSwitcherProducer() {
		setAllSelected(false)
		setAсtorSelected(false)
		setProducerSelected(true)
	}

	return (
		<section className={`${styles.person} container`}>
			<Button
				type='Link'
				url='#'
				text='Назад'
				container={styles.person__goBackButton}
				imgLeftContainer={styles.person__goBackIcon}
				imgLeft={arrowIconBack}
			/>
			<div className={`${styles.person__container}`}>
				<img
					src='https://i.pinimg.com/236x/4c/d2/3e/4cd23eacb65018a8cb2dfc78a703f6be.jpg'
					alt='Мартин Фриман'
					className={styles.person__image}
				/>
				<h1 className={styles.person__name}>Мартин Фриман</h1>
				<p className={styles.person__nameOrigin}>Martin Freeman</p>
				<p
					className={`${styles.person__tagline} ${
						isTaglineOpen && styles.person__tagline_open
					} `}
				>
					Мартин Джон Си Фриман – британский актер. Обладатель премий Гильдии
					киноактеров, BAFTA, «Эмми». Родился в Олдершоте 8 сентября 1971 года.
					Будущий актер окончил католическую школу, изучал средства массовой
					информации в Бруклендском колледже и получил профессиональное высшее
					образование в Королевской центральной школе речи и драмы в Лондоне.
					Фриман известен зрителю как актер кино и сериалов, но в его биографии
					есть немало театральных ролей.
				</p>
				{isTaglineOpen ? (
					<Button
						type='Button'
						onClick={toggleTaglineText}
						text='Свернуть'
						container={styles.person__link}
					/>
				) : (
					<Button
						type='Button'
						onClick={toggleTaglineText}
						text='Развернуть'
						container={styles.person__link}
					/>
				)}

				<div className={styles.person__chapters}>
					<Button
						type='Link'
						linkTarget='self'
						url='#films'
						text='35 фильмов&#160;&#160;&#183;&#160;&#160;'
						container={styles.person__chapter}
					/>
					<Button
						type='Link'
						linkTarget='self'
						url='#bio'
						text='Биография'
						container={styles.person__chapter}
					/>
				</div>
				<div className={styles.person__filmography} id='films'>
					<div className={styles.person__filmographyTitle}>
						<h2 className={styles.person__chapterTitle}>Полная фильмография</h2>

						<p className={styles.person__chapterSubTitle}>35 фильмов</p>
					</div>
					<div className={styles.person__switchers}>
						<Button
							type='Button'
							text='Всё'
							container={`${styles.person__switcher} ${
								isAllSelected && styles.person__switcher_active
							}`}
							onClick={selectSwitcherAll}
						/>
						<Button
							type='Button'
							text='Актёр'
							container={`${styles.person__switcher} ${
								isAсtorSelected && styles.person__switcher_active
							}`}
							onClick={selectSwitcherActor}
						/>
						<Button
							type='Button'
							text='Продюсер'
							container={`${styles.person__switcher} ${
								isProducerSelected && styles.person__switcher_active
							}`}
							onClick={selectSwitcherProducer}
						/>
					</div>

					{isAllSelected && <PersonFilms />}
					{isAсtorSelected && <PersonFilms />}
					{isProducerSelected && <PersonFilms />}
					<Button
						type='Button'
						text='Ещё 27 фильмов'
						container={styles.person__link}
					/>
				</div>
				<div className={styles.person__biography} id='bio'>
					<h2 className={styles.person__chapterTitle}>Биография</h2>
					<p
						className={`${styles.person__biographyText} ${
							isBioTextOpen && styles.person__biographyText_open
						} `}
					>
						Родился 8 сентября 1971 года в городе Хэмпшир, Великобритания.
						Родители разошлись вскоре после появления мальчика на свет. Когда
						ему исполнилось десять лет, отец (морской офицер Джеффри Фриман)
						умер в результате сердечного приступа. Мартин был четвертым и самым
						младшим ребенком в семье. С детства он не отличался крепким
						здоровьем: болел астмой и перенес операцию на бедре. Религия всегда
						оказывала на него существенное влияние. После окончания католической
						школы Фриман поступил в Центральную школу сценической речи и
						драматического искусства в Лондоне. Когда ему исполнилось пятнадцать
						лет, он присоединился к труппе молодежного театра. К семнадцати
						годам он уже твердо сознавал, что хочет и дальше строить актерскую
						карьеру. <br />
						<br />
						Мартин принял участие по меньшей мере в восемнадцати телевизионных
						шоу, четырнадцати театральных постановках и нескольких
						радиоспектаклях. Первой серьезной работой стала роль Тима Кантербери
						в комедийном сериале BBC «Офис». В 2004 году проект получил премию
						«Золотой Глобус», а актер – номинации на British Comedy Award и
						BAFTA TV Award. После этого на экраны вышел сериал «Hardware» с
						Фриманом в главной роли. В 2002 году он сыграл в ленте Саши Барона
						Коэна «Али Джи в парламенте», а в 2003 – в рождественской комедии
						«Реальная любовь». <br />
						<br />В 1997 году он появился в сериале «Эта жизнь», в главной роли
						в комедии «Робинсоны» и в ситкоме «Книжный магазин Блэка». Работа в
						мини-сериале «Последний король» приблизила Фримана к более
						серьезным, драматическим ролям. Актер сотрудничал с режиссером
						Эдгаром Райтом, сыграл небольшие роли в комедийном боевике «Типа
						крутые легавые» и в пародийной комедии ужасов «Зомби по имени Шон»,
						в 2007-м снялся в комедии Гэйвина Клэкстона «Все вместе». <br />
						<br />
						Фриман появился в клипе музыкантов Faith No More на композицию «I
						Started a Joke» сразу после распада группы в 1998 году, а также
						принял участие в нескольких шоу на радиостанции BBC 6 Music. В 2009
						году Мартин исполнил главную роль в комедийно-драматическом
						телевизионном мини-сериале «Парень встречает девушку», который
						посвящен теме обмена телами. Фриман стал одним из участников
						масштабного кинопроекта «48 часов», сыграв в эпизоде Girl Is Mime. В
						2010 он получил одну из самых успешных в своей карьере ролей –
						доктора Джона Ватсона в очередной вольной адаптации бессмертных
						произведений о Шерлоке Холмсе. Фриман прошел большой кастинг,
						пилотный эпизод с ним получил горячее одобрение. Мартин был удостоен
						престижной премии BAFTA TV как «Лучший актер второго плана».
						<br />
						<br />С весны 2011 года по настоящее время Фриман принимает участие
						в экранизации книги Дж. Р.Р.Толкина «Хоббит, или Туда и обратно».
						Режиссер Питер Джексон сам выбрал его на роль Бильбо Бэггинса.
						<br />
						<br />
						Актер проживает в Хартфордшире. Он состоит в гражданском браке с
						английской актрисой Амандой Эббингтон, у пары двое детей. Они
						познакомились на съемках в 2000 году и с тех пор уже не раз
						встречались на одной съемочной площадке. <br />
						Фриман – вегетарианец и верит в бога.
					</p>

					{isBioTextOpen ? (
						<Button
							type='Button'
							onClick={toggleBioText}
							text='Свернуть'
							container={styles.person__link}
						/>
					) : (
						<Button
							type='Button'
							onClick={toggleBioText}
							text='Читать дальше'
							container={styles.person__link}
						/>
					)}
				</div>
			</div>
		</section>
	)
}

export default Person
