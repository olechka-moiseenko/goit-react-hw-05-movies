import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import MoviesPage from "./components/MoviesPage/MoviesPage.js";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage.js";

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:moviesId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </>
  );
}
