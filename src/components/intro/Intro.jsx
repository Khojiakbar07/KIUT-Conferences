import { useTranslation } from "react-i18next";

// SCSS
import "./Intro.scss";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-title__wrap">
          <h1 className="intro-title">{t("text")}</h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
