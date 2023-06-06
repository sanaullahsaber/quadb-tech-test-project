import { createBrowserRouter } from "react-router-dom";
import ShowList from "../components/ShowList/ShowList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowList></ShowList>,
    loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
  },
]);

export default router;