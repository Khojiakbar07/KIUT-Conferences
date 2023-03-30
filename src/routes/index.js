import { createBrowserRouter } from "react-router-dom";

//routes
import App from "../App";
import Home from "./home/Home";
import About from "./about/About";
import Payment from "./submission/Submission";
import SubmissionNamangan from "./submission/SubmissionNamangan";
import Conferences from "./conferences/Conferences";
import Detail from "./detail/Detail";
import Registration from "./registration/Registration";
import Committees from "./committees/Committees";
import OrganizingInfo from "../components/committees-info/organizing/OrganizingInfo";
import ScientificInfo from "../components/committees-info/scientific/ScientificInfo";
// import NotFound from "./not-found/NotFound";
import Admin from "./admin/Admin";
import Requirements from "./requirements/Requirements";
import { Loader } from "../utils";
import DetailN from "./detail/DetailN";
import AdminNamangan from "./admin/AdminNamangan";
import NotFound from "./not-found/NotFound";

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
                element: <Detail />,
            },
            {
                path: "detail/namangan",
                element: <DetailN />,
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
                path: "registration",
                element: <Registration />,
            },
            {
                path: "committee",
                element: <Committees />,
                children: [
                    {
                        path: "organizing",
                        element: <OrganizingInfo />,
                    },
                    {
                        path: "scientific",
                        element: <ScientificInfo />,
                    },
                ],
            },
            {
                path: "requirements",
                element: <Requirements />,
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
