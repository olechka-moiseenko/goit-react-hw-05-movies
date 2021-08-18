import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/movies-api.js";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieIdObj, setmovieIdObj] = useState([]);
  useEffect(() => {
    api.fetcReviews(movieId).then((res) => setmovieIdObj(res));
  }, [movieId]);

  return (
    <>
      {movieIdObj.length !== 0 ? (
        <ul>
          {movieIdObj &&
            movieIdObj.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>Review: {review.content}</p>
              </li>
            ))}
        </ul>
      ) : (
        "We don`t have any reviews for this movie."
      )}
    </>
  );
};

export default Reviews;
