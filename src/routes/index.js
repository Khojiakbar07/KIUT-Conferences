import { Route, Routes } from "react-router";

//pages
import Home from "./home/Home";
import About from "./about/About";
import Payment from "./payment/Payment";
import Test from "./Test";
import Conferences from "./conferences/Conferences";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/conference" element={<Conferences />} />
    </Routes>
  );
};

export default index;
