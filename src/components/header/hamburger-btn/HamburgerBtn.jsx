import "./HamburgerBtn.scss";

const HamburgerBtn = ({ setNavActive, isNavActive }) => {
  return (
    <button
      className={isNavActive ? "hamburger active" : "hamburger"}
      onClick={() => setNavActive((state) => !state)}
    >
      <div className="hamburger-line"></div>
    </button>
  );
};

export default HamburgerBtn;
