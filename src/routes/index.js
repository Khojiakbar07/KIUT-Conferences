import { Route, Routes } from "react-router";

//pages
import Home from "./home/Home";
import About from "./about/About";
import Test from "./Test";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default index;
