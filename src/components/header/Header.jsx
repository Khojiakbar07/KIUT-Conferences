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
    const langs = ["en", "ru"];
    const [activeLang, setActiveLang] = useState(localStorage.getItem("lang"));
    const [isLangListMouseOver, setLangListMouseOver] = useState(false);
    const [aboutListActive, setAboutListActive] = useState(false);
    const [programListActive, setProgramListActive] = useState(false);
    const [submissionListActive, setSubmissionActive] = useState(false);

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
                                    aboutListActive
                                        ? { display: "block" }
                                        : { display: "none" }
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
                                    <Link to="/detail">TIPF-2023</Link>
                                </li>
                                <li className="sub-list__item nav-sub__list-item">
                                    <Link to="/detail/namangan">
                                        Namangan-2023
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
                                    programListActive
                                        ? { display: "block" }
                                        : { display: "none" }
                                }
                                className="nav__sub-list nav-link__sub-list"
                                onClick={() => {
                                    setProgramListActive(false);
                                }}
                            >
                                <li className="sub-list__item nav-sub__list-item">
                                    <Link to="registration">{t("regis")}</Link>
                                </li>
                                <li className="sub-list__item nav-sub__list-item">
                                    <Link to="requirements">
                                        {t("requirements")}
                                    </Link>
                                </li>
                                <li className="sub-list__item nav-sub__list-item">
                                    <Link to="/committee/organizing">
                                        {t("organiza")}
                                    </Link>
                                </li>
                                <li className="sub-list__item nav-sub__list-item">
                                    <Link to="/committee/scientific">
                                        {t("scine")}
                                    </Link>
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
                                    <Link to="submission">TIPF-2023</Link>
                                </li>
                                <li className="sub-list__item nav-sub__list-item">
                                    <Link to="sumission/namangan">
                                        Namangan-2023
                                    </Link>
                                </li>
                            </ul>
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
                        <FiChevronDown className="down-arrow" />
                    </button>
                    <div className="lang-collection">
                        <ul
                            onClick={() => {
                                setLangListMouseOver(false);
                            }}
                            style={
                                isLangListMouseOver
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                            className="lang-list nav__sub-list"
                        >
                            {langs.map((lang) => (
                                <li
                                    className="sub-list__item"
                                    style={
                                        activeLang === lang
                                            ? { display: "none" }
                                            : null
                                    }
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
