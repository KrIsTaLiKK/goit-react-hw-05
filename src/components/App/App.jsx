import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { NavBar } from '../NavBar/NavBar';

import { MovieCast } from '../MovieCast/MovieCast';
import { MovieReviews } from '../MovieReviews/MovieReviews';
import { Container } from '../Container/Container';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Suspense fallback={<b>Loading subpage...</b>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};
