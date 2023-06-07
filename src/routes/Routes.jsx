import { createBrowserRouter } from "react-router-dom";
import ShowList from "../components/ShowList/ShowList";
import ShowSummary from "../components/ShowSummary/ShowSummary";
import Main from "../layouts/Main";
import Bookings from "../components/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <ShowList></ShowList>,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "summary/:id",
        element: <ShowSummary></ShowSummary>,
        loader: ({ params }) =>
          fetch(`https://api.tvmaze.com/shows/${params.id}`),
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>
      },
    ],
  },
]);

export default router;