import React from "react";
import "./FilmCard.css";
import Button from "./../Button/Button";
import axios from "axios"
import toast,{Toaster} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
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
  const deleteFilm =async ()=>{
const response = await axios.delete(`${process.env.REACT_APP_API_URL}/films/${_id}`);
toast.success(response.data.message)
window.location.reload();
  }
const navigate= useNavigate();

  return (
    <div className="filmcard">
      <div>
        <img src={poster} alt={title} className="film-card-poster" />
      </div>
      <div className="film-card-info">
        <h1>{title}</h1>
        <p className="film-card-info-details">
          {" "}
          <span className="director-name">Director: {director}</span>
          <span className="release-year">Release Year : {releaseYear}</span>
        </p>

        <p className="film-card-info-details">
          {" "}
          <span className="director-name">Language : {language}</span>
          <span className="release-year">Category : {category}</span>
        </p>
        <p>{shortDescription}</p>
        <div className="film-rating-card">Rating :- {rating}</div>
      </div>
      <span  className="film-edit"><Button  title={"Edit"} onClick={()=>{navigate(`film/edit/${_id}`)}} className="film-edit-btn"/></span>
      <span className="film-delete"><Button  title={"Delete"} onClick={()=>{deleteFilm()}} className="film-delete-btn"/></span>
      <Toaster/>
    </div>

  );
}

export default FilmCard;
