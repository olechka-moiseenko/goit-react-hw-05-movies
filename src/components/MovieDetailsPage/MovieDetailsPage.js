import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as api from "../../services/movies-api";

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.fetchMovieInfo(movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <img src={movie.imgUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.descr}</p>
    </>
  );
}
