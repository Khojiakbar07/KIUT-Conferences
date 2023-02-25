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
      content:
        "Make sure you’re trying to sign in to the right application system. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt.",
    },
    {
      title: `2. ${t("methot")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      title: `3. ${t("innovaat")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      title: `4. ${t("teach")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      title: `5. ${t("trnd")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      title: `6. ${t("advance")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      title: `7. ${t("expect")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      title: `8. ${t("press")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      title: `9. ${t("practice")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      title: `10. ${t("education")}`,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
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
          <strong className="conference-info__text track-title">{t("thms")}</strong>
          <Accordion data={AccordionData} multiple={true} />
          <ol>
            <li>
              <span></span>
            </li>
            <li>
              <span className="conference-info__text"></span>
            </li>
            <li>
              <span className="conference-info__text"></span>
            </li>
            <li>
              <span className="conference-info__text"></span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetail;
