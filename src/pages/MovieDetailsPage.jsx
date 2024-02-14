import { useEffect, useState } from 'react';
import { fetchMoviesById } from '../films-api';
import { useParams } from 'react-router-dom';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import { Loader } from '../components/Loader/Loader';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const fetchedMovieById = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMoviesById(movieId, {
          abortController: controller,
        });

        setMovie(data);
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
    <div>
      {loading && <Loader />}
      {error && <b>Oops! Something went wrong. Please, reloading the page!</b>}
      {movie && <MovieDetails item={movie} />}
    </div>
  );
}
