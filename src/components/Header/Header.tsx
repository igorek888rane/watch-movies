import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className="container">
      <div className="logotype"></div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Мой Иви</li>
          <li className="nav__item">Что нового</li>
          <li className="nav__item">Фильмы</li>
          <li className="nav__item">Сериалы</li>
          <li className="nav__item">Мультфильмы</li>
          <li className="nav__item">TV+</li>
        </ul>
      </nav>
      <div>
        <button>Смотреть 30 дней за 1 Р</button>
        <button>Поиск</button>
        <button>Колок</button>
        <button>Авторизация</button>
      </div>
    </header>
  );
};

export default Header;
