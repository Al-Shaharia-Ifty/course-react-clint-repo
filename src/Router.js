import { createBrowserRouter } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Blog from "./Components/Blog";
import Course from "./Components/Course";
import FAQ from "./Components/FAQ";
import Main from "./Shared/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Course />,
      },
      {
        path: "course",
        element: <Course />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
