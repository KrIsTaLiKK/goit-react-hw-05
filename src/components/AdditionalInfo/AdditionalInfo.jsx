import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './AdditionalInfo.module.css';
import clsx from 'clsx';

export const AdditionalInfo = () => {
  return (
    <div className={css.wrapAddInfo}>
      <h3 className={css.title}>Additional information</h3>
      <div className={css.addInfoLinkWrap}>
        <NavLink to="cast" className={clsx(css.link, css.blink)}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={clsx(css.link, css.blink)}>
          Reviews
        </NavLink>
      </div>

      <Suspense fallback={<b>Loading, please wait!...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
