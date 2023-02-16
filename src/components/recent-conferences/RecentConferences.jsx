import "./RecentConferences.scss";
import {useTranslation} from "react-i18next";

const RecentConferences = () => {
    const { t } = useTranslation();
    
  return (
    <div className="recent-conferences">
      <h4 className="recent-conferences__title">
        <strong>{t("recent_conferences")}</strong>
      </h4>
      
    </div>
  );
};

export default RecentConferences;
