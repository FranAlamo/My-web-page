import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "../404/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "../pages/Home.jsx";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import Contact from "../pages/Contact.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/skills",
    element: <Skills />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
