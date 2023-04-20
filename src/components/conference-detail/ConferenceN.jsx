import { useTranslation } from "react-i18next";

//image
import conferenceImg from "../../assets/images/conference2.jpg";

// data
import confData from "../../dummy-data/namangan-detail.json";

// style
import "./ConferenceN.scss";

export default function ConferenceN() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang");
  return (
    <section className="conference-info">
      <div className="container">
        <h3 className="conference-info__title line">{t("confdet")}</h3>
        <div className="conference-info__info">
          <div className="conference-info__img namangan__conference-info__img">
            <img src={conferenceImg} alt="Forum" />
          </div>
          <div className="conference-info__card">
            <div className="conference-info__card-title">
              <strong>{t("importe")}</strong>
            </div>
            <ul className="conference-info__card__list">
              <li className="conference-info__card__list-item">
                <strong>{t("online")}</strong>
                <p>{t("may")} 25. 2023</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>{t("online_regis")}</strong>
                <p>{t("march")} 26, 2023</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>{t("conferen")}</strong>
                <p>{t("may")} 25-26, 2023</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="conference-info__content">
          <p className="conference-info__text">{confData[0][lang].detail}</p>
          <div className="conference-info__text">
            {confData[0][lang].list.title}
          </div>
          <ol style={{ marginBottom: "40px" }}>
            {confData[0][lang].list.priorities.map((p, index) => (
              <li className="conference-info__text">
                {index + 1}. {p}
              </li>
            ))}
          </ol>

          <strong
            style={{ marginBottom: "0", display: "block" }}
            className="conference-info__text track-title"
          >
            {t("zoom_meeting")}
          </strong>
          <a
            style={{ textDecoration: "underline" }}
            href={confData[0][lang].link}
            className="conference-info__text"
          >
            {confData[0][lang].link}
          </a>
          <p style={{ marginBottom: "0" }} className="conference-info__text">
            {t("zoom_id")} {confData[0][lang].id} {t("access_code")}{" "}
            {confData[0][lang].access_code}.
          </p>
        </div>
      </div>
    </section>
  );
}
