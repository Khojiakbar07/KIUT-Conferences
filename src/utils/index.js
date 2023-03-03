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
  }, [pathname]);

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

const Loader = () => {
  return (
    <div className="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: "auto", background: "fff", display: "block" }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="75" cy="50" fill="#56a8ff" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.9649122807017544s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.9649122807017544s"
          ></animate>
        </circle>
        <circle cx="71.65063509461098" cy="62.5" fill="#56a8ff" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.8771929824561403s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.8771929824561403s"
          ></animate>
        </circle>
        <circle cx="62.5" cy="71.65063509461096" fill="#56a8ff" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.7894736842105263s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.7894736842105263s"
          ></animate>
        </circle>
        <circle cx="50" cy="75" fill="#56a8ff" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.7017543859649122s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.7017543859649122s"
          ></animate>
        </circle>
        <circle
          cx="37.50000000000001"
          cy="71.65063509461098"
          fill="#56a8ff"
          r="5"
        >
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.6140350877192983s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.6140350877192983s"
          ></animate>
        </circle>
        <circle cx="28.34936490538903" cy="62.5" fill="#56a8ff" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.5263157894736842s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.5263157894736842s"
          ></animate>
        </circle>
        <circle cx="25" cy="50" fill="#56a8ff" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.43859649122807015s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.43859649122807015s"
          ></animate>
        </circle>
        <circle
          cx="28.34936490538903"
          cy="37.50000000000001"
          fill="#56a8ff"
          r="5"
        >
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.3508771929824561s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.3508771929824561s"
          ></animate>
        </circle>
        <circle
          cx="37.499999999999986"
          cy="28.34936490538904"
          fill="#56a8ff"
          r="5"
        >
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.2631578947368421s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.2631578947368421s"
          ></animate>
        </circle>
        <circle cx="49.99999999999999" cy="25" fill="#56a8ff" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.17543859649122806s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.17543859649122806s"
          ></animate>
        </circle>
        <circle cx="62.5" cy="28.349364905389034" fill="#56a8ff" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="-0.08771929824561403s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="-0.08771929824561403s"
          ></animate>
        </circle>
        <circle
          cx="71.65063509461096"
          cy="37.499999999999986"
          fill="#56a8ff"
          r="5"
        >
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill"
            values="#56a8ff;#56a8ff;#2365ff;#56a8ff;#56a8ff"
            repeatCount="indefinite"
            times="0;0.1;0.2;0.3;1"
            dur="1.0526315789473684s"
            begin="0s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export { BackToTop, Loader };
