import { FC, useState } from 'react';
import styles from './Footer.module.scss';
import data from './footerData.json';
import Button from '@/components/Button/Button';

const Footer: FC = () => {
  const [btnPopupOpen, setBtnPopupOpen] = useState<boolean>(false);

  function toggleBtnPopup() {
    setBtnPopupOpen(!btnPopupOpen);
  }

  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__wrapper}>
        {' '}
        <div className="list">
          <h2 className="list__title">{data.about.title}</h2>
          <ul className="list__items">
            {data.about.links.map((el) => {
              return (
                <li className="list__item" key={el.name}>
                  <a
                    className="list__link list__link_type_grey"
                    href={el.url}
                    target="_blank"
                  >
                    {el.name}
                  </a>
                </li>
              );
            })}              
          </ul>
        </div>
        <div className="list">
          <h2 className="list__title">{data.chapter.title}</h2>
          <ul className="list__items">
            {data.chapter.links.map((el) => {
              return (
                <li className="list__item" key={el.name}>
                  <a
                    className="list__link list__link_type_grey"
                    href={el.url}
                    target="_blank"
                  >
                    {el.name}
                  </a>
                </li>
              );
            })}
            <li className="list__item">
                  <a
                    className="list__link list__link_type_violet"
                    href="https://www.ivi.ru/cert"
                    target="_blank"
                  >
                    Активация сертификата
                  </a>
                </li>
          </ul>
        </div>
        <div className={styles.footer__container}>
          <h2 className="list__title">Служба поддержки</h2>
          <p className={`${styles.footer__desc} list__item`}>
            Мы всегда готовы вам помочь.
            <br />
            Наши операторы онлайн 24/7
          </p>
          <Button url="https://www.ivi.ru/profile">
            <p className={`list__title ${styles.footer__buttonText}`}>
              Написать в чате
            </p>
          </Button>
          <ul className={styles.footer__links}>
            <li className={styles.footer__link}>
              {' '}
              <Button url="mailto:support@ivi.ru">
                <div
                  className={`${styles.footer__btnIcon} ${styles.footer__btnIcon_type_mail}`}
                ></div>
              </Button>
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
                href="tel:88002344923"
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
            className="list__link list__link_type_white"
            href="https://ask.ivi.ru/"
            target="_blank"
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
                <Button url="https://go.onelink.me/app/devicesiOS">
                  <div
                    className={`${styles.footer__deviceIcon} ${styles.footer__deviceIcon_type_apple}`}
                  ></div>
                  <div>
                    <div className={styles.footer__deviceText}>Загрузить в</div>
                    <div className={`${styles.footer__deviceTitle} list__title`}>App Store</div>
                  </div>
                </Button>
              </li>
              <li className={`${styles.footer__social} list__item`}>
                <Button url="https://go.onelink.me/app/devicesAndroid">
                  <div
                    className={`${styles.footer__deviceIcon} ${styles.footer__deviceIcon_type_android}`}
                  ></div>
                  <div>
                    <div className={styles.footer__deviceText}>Доступно в</div>
                    <div className={`${styles.footer__deviceTitle} list__title`}>Google Play</div>
                  </div>
                </Button>
              </li>
              <li className={`${styles.footer__social} list__item`}>
                <Button url="https://www.ivi.ru/pages/tvsmart">
                  <div
                    className={`${styles.footer__deviceIcon} ${styles.footer__deviceIcon_type_smartTV}`}
                  ></div>
                  <div>
                    <div className={styles.footer__deviceText}>Смотрите на</div>
                    <div className={`${styles.footer__deviceTitle} list__title`}>Smart TV</div>
                  </div>
                </Button>
              </li>
              <li className={`${styles.footer__social} list__item`}>
                <Button url="https://www.ivi.ru/devices">
                  <div
                    className={`${styles.footer__deviceIcon} ${styles.footer__deviceIcon_type_allDevices}`}
                  ></div>
                  <div>
                    <div className={`${styles.footer__deviceTitle} list__title`}>Все устройства</div>
                  </div>
                </Button>
              </li>
            </ul>
    

          <p className="list__item">
            &#169; 2023 ООО «Иви.ру»
            <br />
            HBO&#174; and related service marks are the property of Home Box
            Office, Inc
          </p>
        </div>
        <ul className={`${styles.footer__socials} list`}>
          <li className={`${styles.footer__social} list__item`}>
            <Button url="https://vk.com/iviru">
              <div
                className={`${styles.footer__socialIcon} ${styles.footer__socialIcon_type_vk}`}
              ></div>
            </Button>
          </li>
          <li className={`${styles.footer__social} list__item`}>
            <Button url="https://ok.ru/ivi.ru">
              <div
                className={`${styles.footer__socialIcon} ${styles.footer__socialIcon_type_ok}`}
              ></div>
            </Button>
          </li>
          <li className={`${styles.footer__social} list__item`}>
            {' '}
            <Button url="https://twitter.com/ivi_ru">
              {' '}
              <div
                className={`${styles.footer__socialIcon} ${styles.footer__socialIcon_type_twitter}`}
              ></div>
            </Button>
          </li>
          <li className={`${styles.footer__social} list__item`}>
            {' '}
            <Button url="https://vb.me/a0544c">
              {' '}
              <div
                className={`${styles.footer__socialIcon} ${styles.footer__socialIcon_type_vb}`}
              ></div>
            </Button>
          </li>
          <li className={`${styles.footer__social} list__item`}>
            {' '}
            <Button url="https://www.linkedin.com/company/2543415/">
              {' '}
              <div
                className={`${styles.footer__socialIcon} ${styles.footer__socialIcon_type_linkedin}`}
              ></div>
            </Button>
          </li>
          <li className={`${styles.footer__social} list__item`}>
            <Button url="https://t.me/official_iviru">
              {' '}
              <div
                className={`${styles.footer__socialIcon} ${styles.footer__socialIcon_type_tgrm}`}
              ></div>
            </Button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
