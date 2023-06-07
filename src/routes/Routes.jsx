import { createBrowserRouter } from "react-router-dom";
import ShowList from "../components/ShowList/ShowList";
import ShowSummary from "../components/ShowSummary/ShowSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowList></ShowList>,
    loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
  },
  {
    path: "summary/:id",
    element: <ShowSummary></ShowSummary>,
    loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
  },
]);

export default router;