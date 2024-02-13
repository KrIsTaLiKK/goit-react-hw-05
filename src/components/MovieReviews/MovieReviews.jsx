import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../films-api';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';

export const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
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
        const data = await fetchMovieReviews(movieId, {
          abortController: controller,
        });

        setMovieReviews(data);
        setIsEmpty(!data.length);
      } catch (error) {
        error.code !== 'ERR_CANCELED' && setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchedMovieById();

    return () => controller.abort();
  }, [movieId]);

  return (
    <div className={css.reviewsWrap}>
      {loading && <b>Loading...Please wait!</b>}
      {error && <b>Oops! Something went wrong. Please, reloading the page!</b>}
      {!isEmpty ? (
        <ul className={css.reviewsList}>
          {movieReviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p className={css.author}>
                  Author: <span className={css.authorName}>{author}</span>
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews yet!</p>
      )}
    </div>
  );
};
