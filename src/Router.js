import { createBrowserRouter } from "react-router-dom";
import Main from "./Shared/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
