import { useEffect, useState } from 'react';
import { fetchMoviesByDailyTrend } from '../films-api';

import { MovieList } from '../components/MovieList/MovieList';
import { HomePageTitleBlock } from '../components/HomePageTitleBlock/HomePageTitleBlock';
import { Loader } from '../components/Loader/Loader';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchedMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        setMovies([]);
        const { results } = await fetchMoviesByDailyTrend({
          abortController: controller,
        });
        setMovies(results);
      } catch (error) {
        error.code !== 'ERR_CANCELED' && setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchedMovies();
    return () => controller.abort();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <b>Oops! Something went wrong. Please, reloading the page!</b>}
      <HomePageTitleBlock />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
