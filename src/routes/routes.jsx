import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "./Error";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
