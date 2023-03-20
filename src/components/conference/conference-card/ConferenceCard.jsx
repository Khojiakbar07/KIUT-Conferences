//tools
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";

//SCSS
import "./ConferenceCard.scss";

const ConferenceCard = ({ img, title, body, link }) => {
  const { t } = useTranslation();

  return (
    <div className="conference-card">
      <div className="conference-card__img">
        <img src={img} alt="Conference" />
      </div>
      <div className="conference-card__content">
        <h2 className="conference-card__title">{title}</h2>
        <p className="conference-card__desc">{body}</p>
        <Link className="conference-card__link" to={link}>
          <span>{t("read")}</span> <HiOutlineArrowLongRight />
        </Link>
      </div>
    </div>
  );
};

export default ConferenceCard;
