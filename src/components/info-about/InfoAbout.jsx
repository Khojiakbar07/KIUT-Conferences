//SCSS
import "./InfoAbout.scss";
import { useTranslation } from "react-i18next";

const InfoAbout = () => {
  const { i18n, t } = useTranslation();
  
  return (
    <section className="about-info">
      <div className="container">
        <h3 className="about-info__title">{t("ABOUT_US")}</h3>
        <div className="about-info__content">
          <p className="about-info__text">
            {t("about_text1")}
            <br />
            {t("about_text2")}
            <br />
            {t("about_text3")}
          </p>
          <div className="map-location">
            <iframe
              title="university-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17161.645225029253!2d69.23151183629184!3d41.264248513191895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bbe0da01105%3A0x83ab2e159ab60db9!2sKIMYO%20INTERNATIONAL%20UNIVERSITY%20IN%20TASHKENT!5e0!3m2!1sru!2s!4v1676265850339!5m2!1sru!2s"
              width={596}
              height={430}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoAbout;
