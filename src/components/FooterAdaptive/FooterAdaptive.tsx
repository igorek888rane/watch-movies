import { FC, useState } from 'react'
import styles from './FooterAdaptive.module.scss'
import data from '../../data/footerData.json'
import Button from '@/components/UI/Button/Button'
import arrowIconShow from '../../assets/img/icons/arrow-show.svg'
import arrowIconHide from '../../assets/img/icons/arrow-hide.svg'
import cameraIcon from '../../assets/img/icons/camera-icon.svg'
import aboutIcon from '../../assets/img/icons/about-icon.svg'
import mailIcon from '../../assets/img/icons/mail.svg'
import appealIcon from '../../assets/img/icons/appeal-icon.svg'
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

const FooterAdaptive: FC = () => {
	const [menuAboutOpen, setMenuAboutOpen] = useState<boolean>(false)
	const [menuChapterOpen, setMenuChapterOpen] = useState<boolean>(false)
	const [menuSupportOpen, setMenuSupportOpen] = useState<boolean>(false)
	const [btnPopupOpen, setBtnPopupOpen] = useState<boolean>(false)

	function toggleBtnPopup() {
		setBtnPopupOpen(!btnPopupOpen)
	}

	function toggleMenuAbout() {
		setMenuAboutOpen(!menuAboutOpen)
	}

	function toggleMenuChapter() {
		setMenuChapterOpen(!menuChapterOpen)
	}

	function toggleMenuSupport() {
		setMenuSupportOpen(!menuSupportOpen)
	}

	return (
		<footer className={`${styles.footer} container`}>
			<div className={styles.footer__wrapper}>
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
			</div>

			<div className={styles.footer__menu}>
				{' '}
				<nav className={`list ${styles.footer__list}`}>
					<div className={styles.footer__menuTitle}>
						<Button
							type='Button'
							container={styles.footer__menuBtn}
							imgLeft={cameraIcon}
							imgLeftContainer={styles.footer__menuIcon}
						/>
						<h2 className='list__title'>{data.chapter.title}</h2>
						{menuChapterOpen ? (
							<Button
								onClick={toggleMenuChapter}
								type='Button'
								container={styles.footer__menuBtn}
								imgLeft={arrowIconHide}
								imgLeftContainer={styles.footer__menuIcon}
							/>
						) : (
							<Button
								onClick={toggleMenuChapter}
								type='Button'
								container={styles.footer__menuBtn}
								imgLeft={arrowIconShow}
								imgLeftContainer={styles.footer__menuIcon}
							/>
						)}
					</div>
					<div
						className={`${styles.footer__menuContent} ${
							menuChapterOpen && `${styles.footer__menuContent_opened}`
						}`}
					>
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
					</div>
				</nav>
				<nav className={`list ${styles.footer__list}`}>
					<div className={styles.footer__menuTitle}>
						<Button
							type='Button'
							container={styles.footer__menuBtn}
							imgLeft={aboutIcon}
							imgLeftContainer={styles.footer__menuIcon}
						/>
						<h2 className='list__title'>{data.about.title}</h2>
						{menuAboutOpen ? (
							<Button
								onClick={toggleMenuAbout}
								type='Button'
								container={styles.footer__menuBtn}
								imgLeft={arrowIconHide}
								imgLeftContainer={styles.footer__menuIcon}
							/>
						) : (
							<Button
								onClick={toggleMenuAbout}
								type='Button'
								container={styles.footer__menuBtn}
								imgLeft={arrowIconShow}
								imgLeftContainer={styles.footer__menuIcon}
							/>
						)}
					</div>
					<div
						className={`${styles.footer__menuContent} ${
							menuAboutOpen && `${styles.footer__menuContent_opened}`
						}`}
					>
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
					</div>
				</nav>
				<div className={styles.footer__container}>
					<div className={styles.footer__menuTitle}>
						<Button
							type='Button'
							container={styles.footer__menuBtn}
							imgLeft={appealIcon}
							imgLeftContainer={styles.footer__menuIcon}
						/>
						<h2 className='list__title'>Служба поддержки</h2>
						{menuSupportOpen ? (
							<Button
								onClick={toggleMenuSupport}
								type='Button'
								container={styles.footer__menuBtn}
								imgLeft={arrowIconHide}
								imgLeftContainer={styles.footer__menuIcon}
							/>
						) : (
							<Button
								onClick={toggleMenuSupport}
								type='Button'
								container={styles.footer__menuBtn}
								imgLeft={arrowIconShow}
								imgLeftContainer={styles.footer__menuIcon}
							/>
						)}
					</div>
					<div
						className={`${styles.footer__menuContent} ${
							menuSupportOpen && `${styles.footer__menuContent_opened}`
						}`}
					>
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
				</div>
			</div>

			<div className={styles.footer__menu}>
				{' '}
				<ul className={`${styles.footer__publics} list`}>
					<li className={`${styles.footer__public} list__item`}>
						<Button
							type='Link'
							url='https://vk.com/iviru'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={vkIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__public} list__item`}>
						<Button
							type='Link'
							url='https://ok.ru/ivi.ru'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={odnoklassnikiIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__public} list__item`}>
						<Button
							type='Link'
							url='https://twitter.com/ivi_ru'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={twitterIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__public} list__item`}>
						<Button
							type='Link'
							url='https://vb.me/a0544c'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={viberIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__public} list__item`}>
						<Button
							type='Link'
							url='https://www.linkedin.com/company/2543415/'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={linkedinIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
					<li className={`${styles.footer__public} list__item`}>
						<Button
							type='Link'
							url='https://t.me/official_iviru'
							container={`${styles.footer__button} ${styles.footer__button_type_circle}`}
							imgLeft={telegramIcon}
							imgLeftContainer={styles.footer__socialIcon}
						></Button>
					</li>
				</ul>
				<p className='list__item'>
					&#169; 2023 ООО «Иви.ру»
					<br />
					HBO&#174; and related service marks are the property of Home Box
					Office, Inc
				</p>
			</div>
		</footer>
	)
}

export default FooterAdaptive
