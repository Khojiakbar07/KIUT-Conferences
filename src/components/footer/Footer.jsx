// tools
import { Link } from "react-router-dom";
//SCSS
import "./Footer.scss";
//images
import logo from "../../assets/logo/KiutLogo.svg";
//icons
import { FaInstagram, FaVk, FaYoutube, FaFacebookF } from "react-icons/fa";
import { useTranslation } from "react-i18next";
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
                <Link to="/conference" className="footer__link">
                  {t("conference")}
                </Link>
              </li>
              <li className="footer__links-list__item">
                <a
                  href="https://goo.gl/maps/fnyo8eCUrAiTLvKF9"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                >
                  {t("our_location")}
                </a>
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
                href="https://https://vk.com"
                rel="noreferrer"
                target="_blank"
                className="footer__social-link vk"
              >
                <FaVk />
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
              All Rights Reserved <br />© Copyright 2022-2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
