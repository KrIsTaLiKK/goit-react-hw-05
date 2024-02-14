import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {movies.map(({ title, id, release_date }) => {
          const releaseYear = release_date.split('-').splice(0, 1).join('');

          return (
            <li key={id}>
              <NavLink
                to={`/movies/${id}`}
                state={location}
                className={css.link}
              >
                {title} {releaseYear && `(${releaseYear})`}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
