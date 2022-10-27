import { createBrowserRouter } from "react-router-dom";
import Course from "./Components/Course";
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
    ],
  },
]);
