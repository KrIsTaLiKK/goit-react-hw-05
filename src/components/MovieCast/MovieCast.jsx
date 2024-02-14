import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../films-api';
import { useParams } from 'react-router-dom';
import { getImg } from '../../helpers/get-img';
import css from './MovieCast.module.css';
import { Loader } from '../Loader/Loader';

export const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const fetchedMovieById = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieCast(movieId, {
          abortController: controller,
        });

        setMovieCast(data);
        setIsEmpty(data.length === 0);
      } catch (error) {
        error.code !== 'ERR_CANCELED' && setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchedMovieById();

    return () => controller.abort();
  }, [movieId]);

  console.log(isEmpty);

  return (
    <div>
      {loading && <Loader />}
      {error && <b>Oops! Something went wrong. Please, reloading the page!</b>}
      {!isEmpty ? (
        <ul className={css.castList}>
          {movieCast.map(({ character, name, id, profile_path }) => {
            const href = getImg(profile_path);
            return (
              <li key={id} className={css.castItem}>
                <div className={css.profileWrap}>
                  <img
                    src={href}
                    alt={`photo by ${name}`}
                    className={css.img}
                  />
                </div>
                <div>
                  <p className={css.subtitle}>
                    Name:<span className={css.text}> {name}</span>
                  </p>
                  {character && (
                    <p className={css.subtitle}>
                      Character: <span className={css.text}> {character}</span>
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <b>Sorry, we don`t have cast</b>
      )}
    </div>
  );
};
