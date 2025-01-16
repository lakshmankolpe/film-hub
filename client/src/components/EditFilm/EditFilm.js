import React, { useState, useEffect } from "react";
import "./EditFilm.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../Button/Button";
import Input from "../Input/Input";
import toast, { Toaster } from "react-hot-toast";

function EditFilm() {
  const [film, setFilm] = useState({
    title: "",
    shortDescription: "",
    director: "",
    poster: "",
    releaseYear: "",
    category: "",
    language: "",
    rating: "",
  });
  const { id } = useParams();

  const loadFilmsDetails = async () => {
    if (!id) return;
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/films/${id}`
    );
    setFilm(response.data.data);
    console.log(response.data.data);
  };
  useEffect(() => {
    loadFilmsDetails();
  }, []);

  const udatedFilm = async () => {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/films/${id}`,
      {
        title: film.title,
        shortDescription: film.shortDescription,
        director: film.director,
        poster: film.poster,
        releaseYear: film.releaseYear,
        category: film.category,
        language: film.language,
        rating: film.rating,
      }
    );
    toast.success(response.data.message);
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };
  return (
    <div>
      <h1> EditFilm</h1>
      <p>ID : {id}</p>

      <div>
        <h1> Add Film</h1>
        <div className="add-film-form">
          <Input
            label="Title"
            value={film.title}
            setValue={(value) => {
              setFilm({ ...film, title: value });
            }}
            placeholder=" Enter the title of the film"
          />

          <Input
            label="ShortDescription"
            value={film.shortDescription}
            setValue={(value) => {
              setFilm({ ...film, shortDescription: value });
            }}
            placeholder="Enter the Short Description of film"
          />

          <Input
            label="Director"
            value={film.director}
            setValue={(value) => {
              setFilm({ ...film, director: value });
            }}
            placeholder={"Enter the Director of film"}
          />
          <Input
            label="Poster"
            value={film.poster}
            setValue={(value) => {
              setFilm({ ...film, poster: value });
            }}
            placeholder={"Enter the Poster of film"}
          />

          <Input
            label=" ReleaseYear"
            value={film.releaseYear}
            setValue={(value) => {
              setFilm({ ...film, releaseYear: value });
            }}
            placeholder={"Enter the Release Year of film"}
          />

          <Input
            label="Category"
            value={film.category}
            setValue={(value) => {
              setFilm({ ...film, category: value });
            }}
            placeholder={"Enter the Category of film"}
          />
          <Input
            label={"Language"}
            value={film.language}
            setValue={(value) => {
              setFilm({ ...film, language: value });
            }}
            placeholder={"Enter the Language of film"}
          />
          <Input
            label="Rating"
            value={film.rating}
            setValue={(value) => {
              setFilm({ ...film, rating: value });
            }}
            placeholder={"Enter the Rating of film"}
          />
          <Button
            title={"Update Film"}
            onClick={() => {
              udatedFilm();
            }}
            variant=""
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default EditFilm;
