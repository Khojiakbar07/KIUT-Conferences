import { createBrowserRouter } from "react-router-dom";

//routes
import App from "../App";
import Home from "./home/Home";
import About from "./about/About";
import Payment from "./submission/SubmissionMT";
import SubmissionNamangan from "./submission/SubmissionNamangan";
import Conferences from "./conferences/Conferences";
import DetailTIPF from "./detail/Detail-tipf";
import Committees from "./committees/Committees";
import OrganizingInfo from "../components/committees-info/organizing/OrganizingInfo";
import Admin from "./admin/Admin";
import Requirements from "./requirements/Requirements";
import DetailMT from "./detail/Detail-mt";
import AdminNamangan from "./admin/AdminNamangan";
import ArticlesTIPF from "./articles/Articles";
import NotFound from "./not-found/NotFound";
import { Loader } from "../utils";

const root = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Loader />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "conference",
        element: <Conferences />,
      },
      {
        path: "detail",
        element: <DetailTIPF />,
      },
      {
        path: "detail/modern-trends-in-the-development-of-chemical-and-biological-technologies",
        element: <DetailMT />,
      },
      {
        path: "submission",
        element: <Payment />,
      },
      {
        path: "submission/namangan",
        element: <SubmissionNamangan />,
      },

      {
        path: "committee",
        element: <Committees />,
        children: [
          {
            path: "organizing",
            element: <OrganizingInfo />,
          },
        ],
      },
      {
        path: "requirements",
        element: <Requirements />,
      },
      {
        path: "publications/tipf",
        element: <ArticlesTIPF />,
      },
      {
        path: "publications/namangan",
        element: <ArticlesTIPF />,
      },
    ],
  },
  {
    path: "/admin/tashkent",
    element: <Admin />,
  },
  {
    path: "/admin/namangan",
    element: <AdminNamangan />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default root;
