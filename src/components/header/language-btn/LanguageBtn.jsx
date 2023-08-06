import { useTranslation } from "react-i18next";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//icons
import { FiChevronDown } from "react-icons/fi";

const LanguageBtn = () => {
  const langs = ["en", "ru"];
  const { i18n } = useTranslation();

  const [activeLang, setActiveLang] = useState(localStorage.getItem("lang"));
  const [isLangListMouseOver, setLangListMouseOver] = useState(false);

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.textContent || "en");
    setActiveLang(localStorage.getItem("lang"));
    window.location.reload();
  };

  return (
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
            isLangListMouseOver ? { display: "block" } : { display: "none" }
          }
          className="lang-list nav__sub-list"
        >
          {langs.map((lang) => (
            <li
              className="sub-list__item"
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
  );
};

export default LanguageBtn;
