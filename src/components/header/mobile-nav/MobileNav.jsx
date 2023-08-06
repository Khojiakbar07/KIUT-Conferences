import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MobileNavLinkItem from "./MobileNavLinkItem";

import "./MobileNav.scss";

const MobileNav = ({ isNavActive, setNavActive }) => {
  const { t } = useTranslation();

  const handleCloseNav = (e) => {
    if (e.target.classList.contains("mobile-nav__list-link")) {
      setNavActive(false);
    }
  };

  return (
    <div className={isNavActive ? "mobile-nav active" : "mobile-nav"}>
      <div className="mobile-nav__wrapper">
        <nav className="mobile-nav__nav">
          <ul className="mobile-nav__list" onClick={handleCloseNav}>
            <li className="mobile-nav__list-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "mobile-nav__list-link active"
                    : "mobile-nav__list-link"
                }
                to={"/"}
              >
                {t("home")}
              </NavLink>
            </li>

            <li className="mobile-nav__list-item">
              <span className="mobile-nav__list__head-link">
                {t("confere")}
              </span>
              <ul className="mobile-nav__sub-list">
                <MobileNavLinkItem link="/about" name={t("about")} />
                <MobileNavLinkItem
                  link="/detail/modern-trends-in-the-development-of-chemical-and-biological-technologies"
                  name="Modern CBT-2023"
                />
              </ul>
            </li>

            <li className="mobile-nav__list-item">
              <span className="mobile-nav__list__head-link">
                {t("Submission")}
              </span>
              <ul className="mobile-nav__sub-list">
                <MobileNavLinkItem link="/submission" name="Modern CBT-2023" />
              </ul>
            </li>

            <li className="mobile-nav__list-item">
              <span className="mobile-nav__list__head-link">
                {t("Programs")}
              </span>
              <ul className="mobile-nav__sub-list">
                <MobileNavLinkItem
                  link="/requirements"
                  name={t("requirements")}
                />
                <MobileNavLinkItem
                  link="/committee/organizing"
                  name={t("organiza")}
                />
              </ul>
            </li>

            <li className="mobile-nav__list-item">
              <span className="mobile-nav__list__head-link">
                {t("publications")}
              </span>
              <ul className="mobile-nav__sub-list">
                <MobileNavLinkItem link="/publications/tipf" name="TIPF-2023" />
                <MobileNavLinkItem
                  link="/publications/namangan"
                  name="Namangan-2023"
                />
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default MobileNav;
