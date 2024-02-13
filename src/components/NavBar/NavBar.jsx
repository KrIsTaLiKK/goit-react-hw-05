import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './NavBar.module.css';
import { Header } from '../Header/Header';

const activeClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const NavBar = () => {
  return (
    <Header>
      <nav className={css.nav}>
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeClass}>
          Movies
        </NavLink>
      </nav>
    </Header>
  );
};
