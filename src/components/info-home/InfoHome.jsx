import { useTranslation } from "react-i18next";

//images
import rectorImg from "../../assets/images/rector1.jpg";

//SCSS
import "./InfoHome.scss";

const InfoHome = () => {
  const { t } = useTranslation();

  return (
    <section className="home-info">
      <div className="container">
        <div className="home-info__content">
          <h2 className="dean-name">{t("jam")}</h2>
          <strong className="dean__sub-title">{t("dean_sub")}</strong>
          <p className="home-info__text">{t("self")}</p>
        </div>
        <div className="dean-img__wrap">
          <div className="dean-img">
            <img src={rectorImg} alt="Rector of KIUT University" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoHome;
