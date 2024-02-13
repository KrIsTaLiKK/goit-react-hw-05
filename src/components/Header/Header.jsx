import css from './Header.module.css';
import clsx from 'clsx';

export const Header = ({ children }) => {
  return <div className={clsx(css.header, css.blink)}>{children}</div>;
};
