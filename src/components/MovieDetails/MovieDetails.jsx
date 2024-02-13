import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';
import { getImg } from '../../helpers/get-img';
import { BackLink } from '../BackLink/BackLink';
import css from './MovieDetails.module.css';
import { Subtitle } from '../Subtitle/Subtitle';
import clsx from 'clsx';

export const MovieDetails = ({
  item: { poster_path, release_date, overview, title, vote_average, genres },
}) => {
  const releaseYear = release_date.split('-').splice(0, 1).join('');
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const href = getImg(poster_path);
  const userScore =
    vote_average === 0 ? vote_average.toFixed() : vote_average.toFixed(1);

  return (
    <div className={css.movieDetWrap}>
      <BackLink href={backLinkRef.current ?? '/'}>Back to movies</BackLink>
      <div className={css.info}>
        <div className={css.posterWrap}>
          <img src={href} alt={`${title} movie poster`} className={css.img} />
        </div>
        <div className={css.descr}>
          <h1>
            {title} ({releaseYear})
          </h1>
          <p className={clsx(css.text, css.score)}>
            User score: <span>{userScore}</span>
          </p>
          {overview && (
            <div className={css.overviewWrap}>
              <Subtitle>Overview</Subtitle>
              <p className={css.text}>{overview}</p>
            </div>
          )}

          <div>
            <Subtitle>Genres</Subtitle>
            <ul className={css.genresList}>
              {genres.map(({ name }) => (
                <li key={name} className={css.genresItem}>
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </div>
          <AdditionalInfo />
        </div>
      </div>
    </div>
  );
};
