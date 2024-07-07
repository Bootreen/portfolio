// import React from 'react'
import "./css/styles.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/root/root.route.jsx";
import About from "./routes/about/about.route.jsx";
import Portfolio from "./routes/portfolio/portfolio.route.jsx";
import CurriculumVitae from "./routes/cv/cv.route.jsx";
import Contact from "./routes/contact/contact.route.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/cv",
        element: <CurriculumVitae />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
);
