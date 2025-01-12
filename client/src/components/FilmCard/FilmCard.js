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
  return <div className="filmcard">
    <h1>{title}</h1>
    
  </div>;
}

export default FilmCard;
