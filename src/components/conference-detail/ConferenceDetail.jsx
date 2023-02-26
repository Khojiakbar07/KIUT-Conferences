//tools
import { useTranslation } from "react-i18next";

//SCSS
import "./ConferenceDetail.scss";

//image
import forumImg from "../../assets/images/forum-img.png";
import Accordion from "./accordion";

const ConferenceDetail = () => {
  const { t } = useTranslation();

  const AccordionData = [
    {
      title: `1. ${t("current")}`,
      content: [
        {
          text: `${t("detail_text_1.1")}`,
        },
        {
          text: `${t("detail_text_1.2")}`,
        },
        {
          text: `${t("detail_text_1.3")}`,
        },
      ],
    },
    {
      title: `2. ${t("methot")}`,
      content: [
        {
          text: `${t("detail_text_2.1")}`,
        },
        {
          text: `${t("detail_text_2.2")}`,
        },
        {
          text: `${t("detail_text_2.3")}`,
        },
      ],
    },
    {
      title: `3. ${t("innovaat")}`,
      content: [
        {
          text: `${t("detail_text_3.1")}`,
        },
        {
          text: `${t("detail_text_3.2")}`,
        },
        {
          text: `${t("detail_text_3.3")}`,
        },
      ],
    },
    {
      title: `4. ${t("teach")}`,
      content: [
        {
          text: `${t("detail_text_4.1")}`,
        },
        {
          text: `${t("detail_text_4.2")}`,
        },
        {
          text: `${t("detail_text_4.3")}`,
        },
      ],
    },
    {
      title: `5. ${t("trnd")}`,
      content: [
        {
          text: `${t("detail_text_5.1")}`,
        },
        {
          text: `${t("detail_text_5.2")}`,
        },
        {
          text: `${t("detail_text_5.3")}`,
        },
        {
          text: `${t("detail_text_5.4")}`,
        },
      ],
    },
    {
      title: `6. ${t("advance")}`,
      content: [
        {
          text: `${t("detail_text_6.1")}`,
        },
        {
          text: `${t("detail_text_6.2")}`,
        },
        {
          text: `${t("detail_text_6.3")}`,
        },
      ],
    },
    {
      title: `7. ${t("expect")}`,
      content: [
        {
          text: `${t("detail_text_7")}`,
        },
      ],
    },
    {
      title: `8. ${t("press")}`,
      content: [
        {
          text: `${t("detail_text_8")}`,
        },
      ],
    },
    {
      title: `9. ${t("practice")}`,
      content: [
        {
          text: `${t("detail_text_9")}`,
        },
      ],
    },
    {
      title: `10. ${t("education")}`,
      content: [
        {
          text: `${t("detail_text_10")}`,
        },
      ],
    },
  ];

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
          <strong className="conference-info__text track-title">
            {t("thms")}
          </strong>
          <Accordion data={AccordionData} />
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetail;
