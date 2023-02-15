import { Route, Routes } from "react-router";

//pages
import Home from "./home/Home";
import About from "./about/About";
import Payment from "./payment/Payment";
import Test from "./Test";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default index;
