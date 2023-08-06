// tools
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

//icons
import { FiChevronDown } from "react-icons/fi";

// Images
import logo from "../../assets/logo/KiutLogo.png";

// Components
import HamburgerBtn from "./hamburger-btn/HamburgerBtn";

// SCSS
import "./Header.scss";
import LanguageBtn from "./language-btn/LanguageBtn";
import MobileNav from "./mobile-nav/MobileNav";

const Header = () => {
  const { t } = useTranslation();
  const [aboutListActive, setAboutListActive] = useState(false);
  const [programListActive, setProgramListActive] = useState(false);
  const [submissionListActive, setSubmissionActive] = useState(false);
  const [publicsListActive, setPublicsListActive] = useState(false);
  const [isNavActive, setNavActive] = useState(false);

  document.body.style.overflow = isNavActive ? "hidden" : "auto";

  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Site logo" />
          </Link>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
                }
                to="/"
              >
                {t("home")}
              </NavLink>
            </li>
            <li
              onMouseEnter={() => {
                setAboutListActive(true);
              }}
              onMouseLeave={() => {
                setAboutListActive(false);
              }}
              className="nav-list__item"
            >
              <Link className="nav__link" to="#">
                {t("confere")}
                <FiChevronDown className="down-arrow" />
              </Link>
              <ul
                style={
                  aboutListActive ? { display: "block" } : { display: "none" }
                }
                className="nav__sub-list nav-link__sub-list"
                onClick={() => {
                  setAboutListActive(false);
                }}
              >
                <li className="sub-list__item nav-sub__list-item">
                  <Link to="/about">{t("about")}</Link>
                </li>
                <li className="sub-list__item nav-sub__list-item">
                  <Link to="/detail/modern-trends-in-the-development-of-chemical-and-biological-technologies">
                    Modern CBT-2023
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => {
                setProgramListActive(true);
              }}
              onMouseLeave={() => {
                setProgramListActive(false);
              }}
              className="nav-list__item"
            >
              <Link className="nav__link" to="#">
                {t("Programs")}
                <FiChevronDown className="down-arrow" />
              </Link>
              <ul
                style={
                  programListActive ? { display: "block" } : { display: "none" }
                }
                className="nav__sub-list nav-link__sub-list"
                onClick={() => {
                  setProgramListActive(false);
                }}
              >
                <li className="sub-list__item nav-sub__list-item">
                  <Link to="requirements">{t("requirements")}</Link>
                </li>
                <li className="sub-list__item nav-sub__list-item">
                  <Link to="/committee/organizing">{t("organiza")}</Link>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => {
                setSubmissionActive(true);
              }}
              onMouseLeave={() => {
                setSubmissionActive(false);
              }}
              className="nav-list__item"
            >
              <Link className="nav__link" to="#">
                {t("Submission")}
                <FiChevronDown className="down-arrow" />
              </Link>
              <ul
                style={
                  submissionListActive
                    ? { display: "block" }
                    : { display: "none" }
                }
                className="nav__sub-list nav-link__sub-list"
                onClick={() => {
                  setSubmissionActive(false);
                }}
              >
                <li className="sub-list__item nav-sub__list-item">
                  <Link to="submission">Modern CBT-2023</Link>
                </li>
              </ul>
            </li>
            <li
              onMouseEnter={() => {
                setPublicsListActive(true);
              }}
              onMouseLeave={() => {
                setPublicsListActive(false);
              }}
              className="nav-list__item"
            >
              <Link className="nav__link" to="#">
                {t("publications")}
                <FiChevronDown className="down-arrow" />
              </Link>
              <ul
                style={
                  publicsListActive ? { display: "block" } : { display: "none" }
                }
                className="nav__sub-list nav-link__sub-list"
                onClick={() => {
                  setPublicsListActive(false);
                }}
              >
                <li className="sub-list__item nav-sub__list-item">
                  <Link to="publications/tipf">TIPF-2023</Link>
                </li>
                <li className="sub-list__item nav-sub__list-item">
                  <Link to="publications/namangan">Namangan-2023</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div style={{ display: "flex", gap: "10px" }}>
          <LanguageBtn />
          <HamburgerBtn isNavActive={isNavActive} setNavActive={setNavActive} />
          <MobileNav isNavActive={isNavActive} setNavActive={setNavActive} />
        </div>
      </div>
    </header>
  );
};

export default Header;
