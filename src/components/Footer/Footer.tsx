import { FC } from 'react';
import styles from './Footer.module.scss';
import data from './footerData.json';
import Button from '@/components/Button/Button';

const Footer: FC = () => {
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
          </ul>
        </div>
        <div className={styles.footer__container}>
          <h2 className="list__title">Служба поддержки</h2>
          <p className="list__item">
            Мы всегда готовы вам помочь.
            <br />
            Наши операторы онлайн 24/7
          </p>
          <Button url="https://www.ivi.ru/profile">
            <p className={`list__title ${styles.footer__buttonText}`}>Написать в чате</p>
          </Button>
          <a
            className="list__link list__link_type_white"
            href="https://ask.ivi.ru/"
            target="_blank"
          >
            ask.ivi.ru
          </a>
          <p className="list__item">Ответы на вопросы</p>
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

      <div className={styles.footer__wrapper}></div>
    </footer>
  );
};

export default Footer;
