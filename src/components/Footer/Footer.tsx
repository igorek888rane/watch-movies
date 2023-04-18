import { FC, useState } from 'react'
import styles from './Footer.module.scss'
import data from '../../data/footerData.json'
import Button from '@/components/UI/Button/Button'
import mailIcon from '../../assets/img/icons/mail.svg'
import appleIcon from '../../assets/img/icons/apple-white.svg'
import googleIcon from '../../assets/img/icons/google-play.svg'
import smartTVIcon from '../../assets/img/icons/tv.svg'
import allDevicesIcon from '../../assets/img/icons/monitor-phone.svg'
import vkIcon from '../../assets/img/icons/vk.svg'
import odnoklassnikiIcon from '../../assets/img/icons/odnoklassniki.svg'
import twitterIcon from '../../assets/img/icons/twitter.svg'
import viberIcon from '../../assets/img/icons/viber.svg'
import linkedinIcon from '../../assets/img/icons/linkedin.svg'
import telegramIcon from '../../assets/img/icons/telegram.svg'

const Footer: FC = () => {
	const [btnPopupOpen, setBtnPopupOpen] = useState<boolean>(false)

	function toggleBtnPopup() {
		setBtnPopupOpen(!btnPopupOpen)
	}

	return (
		<footer className={`${styles.footer} container`}>
			<div className={styles.footer__wrapper}>
				{' '}
				<nav className='list'>
					<h2 className='list__title'>{data.about.title}</h2>
					<ul className='list__items'>
						{data.about.links.map(el => {
							return (
								<li className='list__item' key={el.name}>
									<a
										className='list__link list__link_type_grey'
										href={el.url}
										target='_blank'
									>
										{el.name}
									</a>
								</li>
							)
						})}
					</ul>
				</nav>
				<nav className='list'>
					<h2 className='list__title'>{data.chapter.title}</h2>
					<ul className='list__items'>
						{data.chapter.links.map(el => {
							return (
								<li className='list__item' key={el.name}>
									<a
										className='list__link list__link_type_grey'
										href={el.url}
										target='_blank'
									>
										{el.name}
									</a>
								</li>
							)
						})}
						<li className='list__item'>
							<a
								className='list__link list__link_type_violet'
								href='https://www.ivi.ru/cert'
								target='_blank'
							>
								Активация сертификата
							</a>
						</li>
					</ul>
				</nav>
				<div className={styles.footer__container}>
					<h2 className='list__title'>Служба поддержки</h2>
					<p className={`${styles.footer__desc} list__item`}>
						Мы всегда готовы вам помочь.
						<br />
						Наши операторы онлайн 24/7
					</p>
					<Button
						type='Link'
						url='https://www.ivi.ru/profile'
						container={`${styles.footer__button} ${styles.footer__button_type_rectangle}`}
					>
						{' '}
						<p className={`list__title ${styles.footer__buttonText}`}>
							Написать в чате
						</p>
					</Button>

					<ul className={styles.footer__links}>
						<li className={styles.footer__link}>
							<Button
								type='Link'
								url='mailto:support@ivi.ru'
								container={`${styles.footer__button} ${styles.footer__button_type_rectangle}`}
								imgLeft={mailIcon}
								imgLeftContainer={`${styles.footer__btnIcon} ${styles.footer__btnIcon_type_mail}`}
							/>
						</li>
						<li
							className={`${styles.footer__link} ${styles.footer__link_relative}`}
						>
							{' '}
							<button onClick={toggleBtnPopup} className={styles.footer__btn}>
								<div
									className={`${styles.footer__btnIcon} ${styles.footer__btnIcon_type_phone}`}
								></div>
							</button>
							<a
								href='tel:88002344923'
								className={`${styles.footer__btnPopup} ${
									btnPopupOpen && `${styles.footer__btnPopup_opened}`
								}`}
							>
								<p className={`${styles.footer__btnPopupPhone} list__title`}>
									8&#160;800&#160;234&#8208;49&#8208;23
								</p>
								<p className={`${styles.footer__btnPopupText} list__item`}>
									Бесплатно по России
								</p>
							</a>
						</li>
					</ul>
					<a
						className='list__link list__link_type_white'
						href='https://ask.ivi.ru/'
						target='_blank'
					>
						ask.ivi.ru
					</a>
					<p className={`${styles.footer__desc} list__item`}>
						Ответы на вопросы
					</p>
				</div>
				<div className={styles.footer__container}>
					<div className={styles.footer__image}>
						<div className={styles.footer__icon}></div>
					</div>
					<p className={`list__item ${styles.footer__text}`}>
						Смотрите фильмы, сериалы и мультфильмы без рекламы
					</p>
				</div>
			</div>

			<div className={styles.footer__wrapper}>
				<div className={styles.footer__container}>
					<ul className={`${styles.footer__socials} list`}>
						<li className={`${styles.footer__social} list__item`}>
							<Button
								type='Link'
								url='https://go.onelink.me/app/devicesiOS'
								container={`${styles.footer__button} ${styles.footer__button_type_rectangle}`}
								imgLeft={appleIcon}
								imgLeftContainer={styles.footer__deviceIcon}
							>
								<div>
									{' '}
									<div className={styles.footer__deviceText}>Загрузить в</div>
									<div className={`${styles.footer__deviceTitle} list__title`}>
										App Store
									</div>
								</div>
							</Button>
						</li>
						<li className={`${styles.footer__social} list__item`}>
							<Button
								type='Link'
								url='https://go.onelink.me/app/devicesAndroid'
								container={`${styles.footer__button} ${styles.footer__button_type_rectangle}`}
								imgLeft={googleIcon}
								imgLeftContainer={styles.footer__deviceIcon}
							>
								<div>
									<div className={styles.footer__deviceText}>Доступно в</div>
									<div className={`${styles.footer__deviceTitle} list__title`}>
										Google Play
									</div>
								</div>
							</Button>
						</li>
						<li className={`${styles.footer__social} list__item`}>
							<Button
								type='Link'
								url='https://www.ivi.ru/pages/tvsmart'
								container={`${styles.footer__button} ${styles.footer__button_type_rectangle}`}
								imgLeft={smartTVIcon}
								imgLeftContainer={styles.footer__deviceIcon}
							>
								<div>
									<div className={styles.footer__deviceText}>Смотрите на</div>
									<div className={`${styles.footer__deviceTitle} list__title`}>
										Smart TV
									</div>
								</div>
							</Button>
						</li>
						<li className={`${styles.footer__social} list__item`}>
							<Button
								type='Link'
								url='https://www.ivi.ru/pages/tvsmart'
								container={`${styles.footer__button} ${styles.footer__button_type_rectangle}`}
								imgLeft={allDevicesIcon}
								imgLeftContainer={`${styles.footer__deviceIcon} ${styles.footer__deviceIcon_type_allDevices}`}
							>
								<div>
									<div className={`${styles.footer__deviceTitle} list__title`}>
										Все устройства
									</div>
								</div>
							</Button>
						</li>
					</ul>

					<p className='list__item'>
						&#169; 2023 ООО «Иви.ру»
						<br />
						HBO&#174; and related service marks are the property of Home Box
						Office, Inc
					</p>
				</div>
				<ul className={`${styles.footer__socials} list`}>
					<li className={`${styles.footer__social} list__item`}>
						<Button
							type='Link'
							url='https://vk.com/iviru'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={vkIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__social} list__item`}>
						<Button
							type='Link'
							url='https://ok.ru/ivi.ru'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={odnoklassnikiIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__social} list__item`}>
						<Button
							type='Link'
							url='https://twitter.com/ivi_ru'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={twitterIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__social} list__item`}>
						<Button
							type='Link'
							url='https://vb.me/a0544c'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={viberIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__social} list__item`}>
						<Button
							type='Link'
							url='https://www.linkedin.com/company/2543415/'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={linkedinIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__social} list__item`}>
						<Button
							type='Link'
							url='https://t.me/official_iviru'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={telegramIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
