import { Route, Routes } from "react-router";

//layout
import Layout from "../components/layout/Layout";

//pages
import Home from "./home/Home";
import About from "./about/About";
import Payment from "./submission/Submission";
import Conferences from "./conferences/Conferences";
import Detail from "./detail/Detail";
import NotFound from "./not-found/NotFound";

const index = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/programs"
        element={
          <Layout>
            <Conferences />
          </Layout>
        }
      />
      <Route
        path="/detail"
        element={
          <Layout>
            <Detail />
          </Layout>
        }
      />
      <Route
        path="/submission"
        element={
          <Layout>
            <Payment />
          </Layout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default index;
