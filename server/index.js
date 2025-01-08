//lib imports
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose, { get } from "mongoose";

//custom imports
import { getHome, getHealth, getNotFound } from "./other.js";
import { postFilms,getFilms,getFilmById } from "./controllers/films.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  if (conn) {
    console.log(`Connected to MongoDB✅ ✅`);
  }
};

app.get("/", getHome);
app.get("/health", getHealth);

app.post("/films",postFilms);
app.get("/films", getFilms);
app.get("/films/:id",getFilmById)

app.get("*", getNotFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
