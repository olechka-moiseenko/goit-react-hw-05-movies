import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./HomePage.module.css";
import * as api from "../../services/movies-api";

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState();

  useEffect(() => {
    api.getPopularMovies().then((moviesArr) => setMovies(moviesArr));
  }, []);

  return (
    <>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/Movies/${movie.id}`,
                  state: { from: location },
                }}
                className={s.navLinks}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
