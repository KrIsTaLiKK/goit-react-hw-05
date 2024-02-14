import { GiFilmSpool } from 'react-icons/gi';
import css from './HomePageTitleBlock.module.css';

export const HomePageTitleBlock = () => {
  return (
    <div className={css.wrap}>
      <h1>Trending movies today</h1>
      <GiFilmSpool size={40} className={css.mainIcon} />
    </div>
  );
};
