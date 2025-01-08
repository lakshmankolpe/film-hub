import Film from "../models/Film.js";

const postFilms = async (req, res) => {
  const {
    title,
    shortDescription,
    director,
    poster,
    releaseYear,
    category,
    language,
    rating,
  } = req.body;

  const newFilm = new Film({
    title: title,
    shortDescription: shortDescription,
    director: director,
    poster: poster,
    releaseYear: releaseYear,
    category: category,
    language: language,
    rating: rating,
  });

  const savedFilm = await newFilm.save();

  return res.status(201).json({
    success: true,
    message: "Film Created",
    data: savedFilm,
  });
};

const getFilms = async (req, res) => {
  const films = await Film.find().select("-__v  -updatedAt -createdAt");
  return res.status(200).json({
    success: true,
    message: "All Films Fetched successfully",
    data: films,
  });
};

const getFilmById = async (req, res) => {
  const { id } = req.params;
  try {
    const film = await Film.findOne({ _id: id }).select("-__v  -updatedAt -createdAt");
    if (film) {
      return res.status(200).json({
        success: true,
        data: film,
        message: "Film fetched",
      });
    } else {
      return res.status(404).json({
        success: true,
        message: "Films Not Found",
        data: null,
      });
    }
  }catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message, // Corrected here
      data: null,
    });
  }
};

export { postFilms, getFilms, getFilmById };
