import React from "react";
import "./FilmCard.css";

function FilmCard({
  category,
  director,
  language,
  poster,
  rating,
  releaseYear,
  shortDescription,
  _id,
  title,
}) {
  return (
    <div className="filmcard">
      <div>
        <img src={poster} alt={title} className="film-card-poster" />
      </div>
      <div className="film-card-info">
        <h1>{title}</h1>
        <p>Director: {director}</p>
        <span>Release Year{releaseYear}</span>
      </div>
    </div>
  );
}

export default FilmCard;
