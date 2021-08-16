import axios from "axios";

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common.Authorization = AUTH_TOKEN;

export async function fetchPopularMovies() {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=${AUTH_TOKEN}`
    );
    console.log("result :>>", response.data.results);
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}

export async function fetchMovieInSearch(movieName) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${AUTH_TOKEN}&query=${movieName}`
    );
    console.log("result :>>", response.data.results);
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}

export async function fetchMovieInfo(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${AUTH_TOKEN}`);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${AUTH_TOKEN}`
    );
    return response.data.cast;
  } catch (error) {
    alert(error.message);
  }
}

export async function fetchMovieRewiews(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${AUTH_TOKEN}`
    );
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}

const BASE_URL = "http://localhost:4040";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchAuthors() {
  return fetchWithErrorHandling(`${BASE_URL}/authors?_embed=books`);
}

export function fetchBooks() {
  return fetchWithErrorHandling(`${BASE_URL}/books`);
}

export function fetchBookById(bookId) {
  return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
}
