// tools
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

//icons
import { FiChevronDown } from "react-icons/fi";

// Images
import logo from "../../assets/logo/KiutLogo.png";

// SCSS
import "./Header.scss";

const Header = () => {
  const { i18n, t } = useTranslation();
  const langs = ["en", "ru", "uz"];
  const [activeLang, setActiveLang] = useState(localStorage.getItem("lang"));
  const [isLangListMouseOver, setLangListMouseOver] = useState(false);

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.textContent || "en");
    setActiveLang(localStorage.getItem("lang"));
    window.location.reload();
  };

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
            <li className="nav-list__item">
              <NavLink className="nav__link" to="/about">
                {t("about_us")}
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav__link" to="/conference">
                Programs
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav__link" to="/submission">
                Submission
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className="lang"
          onMouseOver={() => {
            setLangListMouseOver(true);
          }}
          onMouseLeave={() => {
            setLangListMouseOver(false);
          }}
        >
          <button className="lang-btn">
            <span>{localStorage.getItem("lang")}</span>
            <FiChevronDown />
          </button>
          <div className="lang-collection">
            <ul
              onClick={() => {
                setLangListMouseOver(false);
              }}
              style={
                isLangListMouseOver ? { display: "block" } : { display: "none" }
              }
              className="lang-list"
            >
              {langs.map((lang) => (
                <li
                  style={activeLang === lang ? { display: "none" } : null}
                  key={uuidv4()}
                  onClick={changeLang}
                >
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
