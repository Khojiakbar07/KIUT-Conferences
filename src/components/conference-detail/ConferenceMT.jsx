import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

//image
import conferenceImg from "../../assets/images/conference2.jpg";

// data
import confData from "../../dummy-data/mt-detail.json";
import documentEN from "../../documents/CONFERENCE_PROGRAM_EN.pdf";
import documentRU from "../../documents/CONFERENCE_PROGRAM_RU.pdf";

// icon
import { FaFileDownload } from "react-icons/fa";

export default function ConferenceMT() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang");

  const conferenceDocuments = {
    en: documentEN,
    ru: documentRU,
  };

  return (
    <section className="conference-info">
      <div className="container">
        <h3 className="conference-info__title line">{t("confdet")}</h3>
        <div className="conference-info__info">
          <div className="conference-info__img mt__conference-info__img">
            <img src={conferenceImg} alt="Forum" />
          </div>
          <div className="conference-info__card">
            <div className="conference-info__card-title">
              <strong>{t("importe")}</strong>
            </div>
            <ul className="conference-info__card__list">
              <li className="conference-info__card__list-item">
                <strong>{t("online")}</strong>
                <p>{t("septemper")} 3, 2023</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>{t("online_regis")}</strong>
                <p>{t("september")} 3, 2023</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>{t("conferen")}</strong>
                <p>{t("september")} 22, 2023</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="conference-info__content">
          <p className="conference-info__text">{confData[0][lang].detail}</p>
          <div className="conference-info__text">
            {confData[0][lang].list.title}
          </div>
          <ol>
            {confData[0][lang].list.priorities.map((p, index) => (
              <li key={uuidv4()} className="conference-info__text">
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
          <p className="conference-info__text">
            {t("zoom_id")} {confData[0][lang].id} {t("access_code")}{" "}
            {confData[0][lang].access_code}.
          </p>

          <a
            href={conferenceDocuments[lang]}
            download
            style={{ marginBottom: "0" }}
          >
            <strong className="conference-info__text underlined">
              {t("download_conference_program")} <FaFileDownload />
            </strong>
          </a>
        </div>
      </div>
    </section>
  );
}
