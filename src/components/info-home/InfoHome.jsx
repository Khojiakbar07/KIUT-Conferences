//component
import RecentConferences from "../recent-conferences/RecentConferences"
//images
import deanImg from "../../assets/images/dean1.jpg";
//SCSS
import "./InfoHome.scss";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

const InfoHome = () => {
  const { i18n, t } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n]);
  return (
    <section className="home-info">
      <div className="container">
        <div className="home-info__content">
          <div className="dean-img">
            <img src={deanImg} alt="Dean of KIUT University" />
          </div>
          <div className="home-info__info">
            <h2 className="dean-name">
              <strong>Janpolat Kudaybergenov</strong>
            </h2>
            <p className="home-info__text">
              {t("janpolat")}
            </p>
          </div>
        </div>
        <aside className="home-info__aside">
          <RecentConferences/>
        </aside>
      </div>
    </section>
  );
};

export default InfoHome;
