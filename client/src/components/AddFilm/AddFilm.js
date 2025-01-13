import React, { useState } from "react";
import "./AddFilm.css";
import Input from "../../components/Input/Input";
import Button from "../Button/Button";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast"

function AddFilm() {
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

  const addFilm = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/films`,
      {
        title: film.title,
        shortDescription: film.shortDescription,
        director:film.director,
        poster:film.poster,
        releaseYear:film.releaseYear,
        category:film.category,
        language:film.language,
        rating:film.rating
      }
    );
    toast.success(response.data.message)
    setFilm({
      title:"",
      shortDescription:"",
      director:"",
      poster:"",
      releaseYear:"",
      category:"",
      language:"",
      rating:""

    })
  };
  return (
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
          title={"Add Film"}
          onClick={() => {
            addFilm();
          }}
          variant=""
        />
      </div>
    </div>
  );
}

export default AddFilm;
