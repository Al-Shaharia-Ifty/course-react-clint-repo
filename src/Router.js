import { createBrowserRouter } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Blog from "./Components/Blog";
import CheckOut from "./Components/CheckOut";
import Course from "./Components/Course";
import CourseDetails from "./Components/CourseDetails";
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
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "course",
        element: <Course />,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "checkout/:id",
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
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
