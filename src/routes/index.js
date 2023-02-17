import { Route, Routes } from "react-router";

//layout
import Layout from "../components/layout/Layout";

//pages
import Home from "./home/Home";
import About from "./about/About";
import Payment from "./payment/Payment";
import Test from "./Test";
import Conferences from "./conferences/Conferences";
import Detail from "./detail/Detail";
import NotFound from "./not-found/NotFound";

const index = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/conference" element={<Layout><Conferences /></Layout>} />
        <Route path="/detail/:conferenceId" element={<Layout><Detail /></Layout>} />
        <Route path="/payment/:conferenceId" element={<Layout><Payment /></Layout>} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default index;
