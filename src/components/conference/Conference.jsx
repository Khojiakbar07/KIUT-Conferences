//tools
import { useTranslation } from "react-i18next";

//SCSS
import "./Conference.scss";
// component
import ConferenceCard from "./conference-card/ConferenceCard";

const Conference = () => {
  const { t } = useTranslation();

  return (
    <section className="conference">
      <div className="container">
        <h3 className="conference-title line">{t("conf")}</h3>
        <div className="conference-inner">
          <ConferenceCard />
          {/* {conferencesArr?.length > 0 &&
            conferencesArr.map((conferenceData) => (
              <ConferenceCard
                key={conferenceData?.id}
                conference={conferenceData}
              />
            ))} */}
        </div>
      </div>
    </section>
  );
};

export default Conference;
