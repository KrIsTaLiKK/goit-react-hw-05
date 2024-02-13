import axios from 'axios';
const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDNlM2QzOTFlN2QzZTcwOTE4NTNiOGMxYTY5MWQ2MyIsInN1YiI6IjY1YzdkZDU5ZTI5NWI0MDE3YmY4NjliMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zlxi-njPnOv8_Y7C0fjglz2mXaGvLyL85iUsQFzSGoY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = API_KEY;

export const fetchMoviesByDailyTrend = async ({ abortController }) => {
  const resp = await axios.get('/trending/movie/day', {
    signal: abortController.signal,
  });

  return resp.data;
};

export const fetchMoviesById = async (movieId, { abortController }) => {
  const resp = await axios.get(`/movie/${movieId}`, {
    signal: abortController.signal,
  });
  return resp.data;
};

export const fetchMovieCast = async (movieId, { abortController }) => {
  const resp = await axios.get(`/movie/${movieId}/credits`, {
    signal: abortController.signal,
  });
  return resp.data.cast;
};

export const fetchMovieReviews = async (movieId, { abortController }) => {
  const resp = await axios.get(`/movie/${movieId}/reviews`, {
    signal: abortController.signal,
  });
  return resp.data.results;
};

export const fetchMoviesBySearchQuery = async (value, { abortController }) => {
  const resp = await axios.get(`/search/movie?query=${value}`, {
    signal: abortController.signal,
  });
  return resp.data.results;
};
