//tools
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

//icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import demoImg from "../../../assets/images/demo.jpg";

//SCSS
import "./ConferenceCard.scss";

const ConferenceCard = () => {
  const { t } = useTranslation();

  return (
    <div className="conference-card">
      <div className="conference-card__img">
        <img src={demoImg} alt="Conference" />
      </div>
      <div className="conference-card__content">
        <h2 className="conference-card__title">{t("intr")}</h2>
        <p className="conference-card__desc">{t("title_intr")}</p>
        <Link className="conference-card__link" to={`/detail`}>
          <span>{t("read")}</span> <HiOutlineArrowLongRight />
        </Link>
      </div>
    </div>
  );
};

export default ConferenceCard;
