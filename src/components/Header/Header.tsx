import { FC } from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import searchSvg from '../../assets/img/icons/search.svg';
import ringSvg from '../../assets/img/icons/ring.svg';
import accountSvg from '../../assets/img/icons/account.svg';

const Header: FC = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.header__left}>
          <nav className={styles.nav}>
            <a className={styles.nav__link}>
              <img
                className={styles.logotype}
                src="https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
              ></img>
            </a>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <a className={styles.nav__link}>Мой Иви</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link}>Мой Иви</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link}>Что нового</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link}>Фильмы</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link}>Сериалы</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link}>Мультфильмы</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link}>TV+</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__right}>
          <ul className={styles.actions__list}>
            <li className={styles.actions__item}>
              <Button
                text={'Смотреть 30 дней за 1 ₽'}
                container={styles.watchButton}
              ></Button>
            </li>
            <li className={styles.actions__item}>
              <Button
                text={'Поиск'}
                container={styles.searchText}
                imgLeft={searchSvg}
                imgLeftContainer={styles.searchButton}
              ></Button>
            </li>
            <li className={styles.actions__item}>
              <Button
                imgLeft={ringSvg}
                imgLeftContainer={styles.ringButton}
              ></Button>
            </li>
            <li className={styles.actions__item}>
              <div className={styles.buttonWrapper}>
                <Button
                  imgLeft={accountSvg}
                  imgLeftContainer={styles.accountButton}
                ></Button>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
