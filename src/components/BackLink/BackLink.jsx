import { NavLink } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ children, href }) => {
  return (
    <div className={css.linkWrap}>
      <NavLink to={href} className={css.link}>
        {children}
      </NavLink>
    </div>
  );
};
