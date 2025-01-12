import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FilmCard from "../../components/FilmCard/FilmCard";

function Home() {
  const [films, setFilms] = useState([]);

  const loadFilms = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/films`);
      setFilms(response.data.data);
      toast.success("All Film Fetched ");
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
  useEffect(() => {
    loadFilms();
  }, []);
  return (
    <div>
      {films?.map((film, index) => {
        const {
          category,
          director,
          language,
          poster,
          rating,
          releaseYear,
          shortDescription,
          _id,
          title,
        } = film;
        return (
          <FilmCard
            key={index}
            {...film}
            category={category}
            director={director}
            language={language}
            poster={poster}
            rating={rating}
            releaseYear={releaseYear}
            shortDescription={shortDescription}
            _id={_id}
            title={title}
          />
        );
      })}
      <Toaster />
    </div>
  );
}

export default Home;
