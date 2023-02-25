//tools
import { useTranslation } from "react-i18next";

//SCSS
import "./ConferenceDetail.scss";

//image
import forumImg from "../../assets/images/forum-img.png";

const ConferenceDetail = () => {
  const { t } = useTranslation();

  return (
    <section className="conference-info">
      <div className="container">
        <h3 className="conference-info__title line">{t("confdet")}</h3>
        <div className="conference-info__info">
          <div className="conference-info__img">
            <img src={forumImg} alt="Forum" />
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
          <strong className="conference-info__text">{t("thms")}</strong>
          <ol>
            <li>
              <span className="conference-info__text">1. {t("current")}</span>
            </li>
            <li>
              <span className="conference-info__text">2. {t("methot")}</span>
            </li>
            <li>
              <span className="conference-info__text">3. {t("innovaat")}</span>
            </li>
            <li>
              <span className="conference-info__text">4. {t("teach")}</span>
            </li>
            <li>
              <span className="conference-info__text">5. {t("trnd")}</span>
            </li>
            <li>
              <span className="conference-info__text">6. {t("advance")}</span>
            </li>
            <li>
              <span className="conference-info__text">7. {t("expect")}</span>
            </li>
            <li>
              <span className="conference-info__text">8. {t("press")}</span>
            </li>
            <li>
              <span className="conference-info__text">9. {t("practice")}</span>
            </li>
            <li>
              <span className="conference-info__text">
                10. {t("education")}
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetail;
