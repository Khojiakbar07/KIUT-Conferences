// tools
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//images
import logo from "../../assets/logo/KiutLogo.png";

//icons
import {
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

//SCSS
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Site logo" />
          </Link>
        </div>
        <div className="footer-right">
          <div className="footer__block">
            <h3 className="footer__block-title">{t("navigation")}</h3>
            <ul className="footer__links-list">
              <li className="footer__links-list__item">
                <Link to="/" className="footer__link">
                  {t("home")}
                </Link>
              </li>
              <li className="footer__links-list__item">
                <Link to="/about" className="footer__link">
                  {t("about_us")}
                </Link>
              </li>
              <li className="footer__links-list__item">
                <Link
                  to="/detail/modern-trends-in-the-development-of-chemical-and-biological-technologies"
                  className="footer__link"
                >
                  Modern CBT-2023
                </Link>
              </li>
              <li className="footer__links-list__item">
                <Link to="/submission" className="footer__link">
                  {t("Submission")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <h3 className="footer__block-title">{t("requisites")}</h3>
            <ul className="footer__links-list">
              <li className="footer__links-list__item">
                <span>
                  {t("inn")}: <br /> 525624553474
                </span>
              </li>
              <li className="footer__links-list__item">
                <span>
                  {t("ogrnip")}: <br /> 312525616000033
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <h3 className="footer__block-title">{t("follow_us")}</h3>
            <div className="footer__socials">
              <a
                href="https://instagram.com"
                rel="noreferrer"
                target="_blank"
                className="footer__social-link instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://telegram.com"
                rel="noreferrer"
                target="_blank"
                className="footer__social-link telegram"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://youtube.com"
                rel="noreferrer"
                target="_blank"
                className="footer__social-link youtube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://facebook.com"
                rel="noreferrer"
                target="_blank"
                className="footer__social-link facebook"
              >
                <FaFacebookF />
              </a>
            </div>
            <p className="copyright">
              All Rights Reserved <br />© KIUT 2022-2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
