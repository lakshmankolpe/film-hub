import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import Film from "./views/Film/Film";
import AddFilm from "./components/AddFilm/AddFilm";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-film",
    element: <AddFilm />,
  },
  {
    path: "/film/:id",
    element: <Film />,
  },
]);
root.render(<RouterProvider router={router} />);
