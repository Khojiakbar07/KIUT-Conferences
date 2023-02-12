import { Route, Routes } from "react-router";

//pages
import Home from "./home/Home";
import About from "./about/About";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default index;
