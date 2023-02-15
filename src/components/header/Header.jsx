// tools
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Images
import logo from "../../assets/logo/KiutLogo.svg";
// SCSS
import "./Header.scss";

const Header = () => {
  const { i18n, t } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("uz");
  }, [i18n]);

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
                {t("conference")}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="join-conference">
          <Link className="join-conference__link">
            {t("join_to_conference")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
