import "./App.css";
import { lazy, Suspense } from "react";
import React from "react";
import Navigation from "./components/Navigation/Navigation.js";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage.js";

const HomePage = lazy(() => import("./components/HomePage/HomePage.js"));
const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage.js"));

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <hr />
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/Movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/Movies/:moviesId">
            <MovieDetailsPage />
          </Route>
          <Route>{/* <h1>404 Page not found</h1> */}</Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
