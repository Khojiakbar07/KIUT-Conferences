import { useTranslation } from "react-i18next";

//SCSS
import "./Speakers.scss";

//images
import speaker1 from "../../assets/speakers/speaker1.jpg";

const Speakers = () => {
  const { t } = useTranslation();
  return (
    <section className="speakers">
      <h3 className="speakers-title line"> {t("speakers")}</h3>
      <div className="container">
        <div className="speakers-content">
          <div className="speakers-box">
            <img src={speaker1} alt="speaker" />
            <div className="speakers-box__info">
              <h4 className="speakers-box__info-name"> {t("emma")}</h4>
              <p className="speakers-box__info-job"> {t("job")}</p>
            </div>
          </div>
          <div className="speakers-box">
            <img src={speaker1} alt="speaker" />
            <div className="speakers-box__info">
              <h4 className="speakers-box__info-name">{t("emma")}</h4>
              <p className="speakers-box__info-job"> {t("job")}</p>
            </div>
          </div>
          <div className="speakers-box">
            <img src={speaker1} alt="speaker" />
            <div className="speakers-box__info">
              <h4 className="speakers-box__info-name">{t("emma")}</h4>
              <p className="speakers-box__info-job"> {t("job")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
