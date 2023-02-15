import "./RecentConferences.scss";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

const RecentConferences = () => {
    const { i18n, t } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage("en");
    }, [i18n]);
  return (
    <div className="recent-conferences">
      <h4 className="recent-conferences__title">
        <strong>{t("recent_conferences")}</strong>
      </h4>
      
    </div>
  );
};

export default RecentConferences;
