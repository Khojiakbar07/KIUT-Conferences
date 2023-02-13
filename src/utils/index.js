import { useEffect, useRef } from "react";
//SCSS
import "./index.scss";

//icon
import { FiChevronUp } from "react-icons/fi";

const BackToTop = () => {
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
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button ref={button} className="back-to-top" onClick={scrollToTop}>
      <FiChevronUp />
    </button>
  );
};

export { BackToTop };
