import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
//SCSS
import "./index.scss";

//icon
import { FiChevronUp } from "react-icons/fi";

const BackToTop = () => {

  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [pathname])

  const button = useRef();
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 200) {
        button.current.style.bottom = "50px";
      } else {
        button.current.style.bottom = "-50px";
      }
    };
  }, []);

  return (
    <button ref={button} className="back-to-top" onClick={scrollToTop}>
      <FiChevronUp />
    </button>
  );
};

export { BackToTop };
