import { useEffect, useState } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { fetchMoviesBySearchQuery } from '../films-api';
import { MovieList } from '../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = searchParams.get('query') ?? '';

  const handleSubmit = inputValue => {
    searchParams.set('query', inputValue);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (queryParams === '') {
      return;
    }

    const controller = new AbortController();
    const fetchedMoviesBySearchQuery = async () => {
      try {
        setLoading(true);
        setError(false);
        setMovies([]);
        const data = await fetchMoviesBySearchQuery(queryParams, {
          abortController: controller,
        });
        setMovies(data);
      } catch (error) {
        error.code !== 'ERR_CANCELED' && setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchedMoviesBySearchQuery();

    return () => {
      controller.abort();
    };
  }, [queryParams]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <b>Loading...Please wait!</b>}
      {error && <b>Oops! Something went wrong. Please, reloading the page!</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
