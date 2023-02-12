// tools
import { Link } from "react-router-dom";
//SCSS
import "./Footer.scss";
//images
import logo from "../../assets/logo/KiutLogo.svg";
//icons
import { FaInstagram, FaVk, FaYoutube, FaFacebookF } from "react-icons/fa";
const Footer = () => {
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
            <h3 className="footer__block-title">Навигация</h3>
            <ul className="footer__links-list">
              <li className="footer__links-list__item">
                <Link to="/" className="footer__link">
                  Главная
                </Link>
              </li>
              <li className="footer__links-list__item">
                <Link to="/about" className="footer__link">
                  О Вас
                </Link>
              </li>
              <li className="footer__links-list__item">
                <Link to="/" className="footer__link">
                  Услуги
                </Link>
              </li>
              <li className="footer__links-list__item">
                <Link to="/" className="footer__link">
                  Карта сайта
                </Link>
              </li>
              <li className="footer__links-list__item">
                <Link to="/" className="footer__link">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <h3 className="footer__block-title">Реквизиты</h3>
            <ul className="footer__links-list">
              <li className="footer__links-list__item">
                <span>
                  Инн: <br /> 525624553474
                </span>
              </li>
              <li className="footer__links-list__item">
                <span>
                  Огрнип: <br /> 312525616000033
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <h3 className="footer__block-title">Мы в соц. сетях</h3>
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
