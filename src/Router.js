import { createBrowserRouter } from "react-router-dom";
import Login from "./Authentication/Login";
import RequireAuth from "./Authentication/RequireAuth";
import Register from "./Authentication/Register";
import Blog from "./Components/Blog";
import CheckOut from "./Components/CheckOut";
import Course from "./Components/Course";
import CourseDetails from "./Components/CourseDetails";
import FAQ from "./Components/FAQ";
import Main from "./Shared/Main";
import ResetPassword from "./Authentication/ResetPassword";
import ErrorPage from "./Shared/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Course />,
        loader: () => fetch("https://server-site-seven.vercel.app/courses"),
      },
      {
        path: "course",
        element: <Course />,
        loader: () => fetch("https://server-site-seven.vercel.app/courses"),
      },
      {
        path: "course-details/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://server-site-seven.vercel.app/course/${params.id}`),
      },
      {
        path: "checkout/:id",
        element: (
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        ),
        loader: ({ params }) =>
          fetch(`https://server-site-seven.vercel.app/course/${params.id}`),
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
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
