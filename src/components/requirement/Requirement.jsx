import { useTranslation } from "react-i18next";
import "./Requirement.scss";

const Requirement = () => {
  const { t } = useTranslation();
  return (
    <div className="requirement">
      <div className="container">
        <h3 className="requirement-title line">{t("requirements")}</h3>
        <div className="requirement-inner">
          <p className="requirement-text requirement-text__title">
            {t("requirement_title")}
          </p>
          <ul>
            <li>
              <p className="requirement-text"> {t("requirement_editor")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_size")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_font")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_line")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_volume")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_right-corner")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_table")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_graph")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_formula")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_sources")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_link")}</p>
            </li>
            <li>
              <p className="requirement-text"> {t("required_article")}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
