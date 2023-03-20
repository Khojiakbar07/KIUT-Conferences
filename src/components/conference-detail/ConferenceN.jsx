import { useTranslation } from "react-i18next";

//image
import conferenceImg from "../../assets/images/conference2.jpg";

export default function ConferenceN() {
  const { t } = useTranslation();
  return (
    <section className="conference-info">
      <div className="container">
        <h3 className="conference-info__title line">{t("confdet")}</h3>
        <div className="conference-info__info">
          <div className="conference-info__img">
            <img src={conferenceImg} alt="Forum" />
          </div>
          <div className="conference-info__card">
            <div className="conference-info__card-title">
              <strong>{t("importe")}</strong>
            </div>
            <ul className="conference-info__card__list">
              <li className="conference-info__card__list-item">
                <strong>{t("online")}</strong>
                <p>{t("september")} 1. 2022</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>{t("online_regis")}</strong>
                <p>{t("march")} 26, 2023</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>{t("conferen")}</strong>
                <p>{t("april")} 26-27, 2023</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="conference-info__content">
          <p className="conference-info__text">{t("organiz")}</p>
          <p className="conference-info__text">{t("part")}</p>
          <strong className="conference-info__text track-title">
            {t("thms")}
          </strong>
        </div>
      </div>
    </section>
  );
}
