//tools
import { useTranslation } from "react-i18next";

//SCSS
import "./Conference.scss";
// component
import ConferenceCard from "./conference-card/ConferenceCard";

//image
import demoImg from "../../assets/images/demo.jpg";
import demoImg2 from "../../assets/images/demo2.jpg";

const Conference = () => {
  const { t } = useTranslation();
  const conferences = [
    {
      title: t("intr"),
      img: demoImg,
      body: t("title_intr"),
      link: "/detail",
    },
    {
      title: t("intr_namangan"),
      img: demoImg2,
      body: t("title_intr_namangan"),
      link: "/detail/namangan",
    },
  ];
  return (
    <section className="conference">
      <div className="container">
        <h3 className="conference-title line">{t("conf")}</h3>
        <div className="conference-inner">
          {conferences.map((c) => (
            <ConferenceCard
              img={c.img}
              title={c.title}
              body={c.body}
              link={c.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conference;
