//tools
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { formatterDate } from "../../hooks/formatterDate";
import { Link } from "react-router-dom";

//SCSS
import "./RecentConferences.scss";
//BASE URL
const BASE_URL = "https://conference.alltravel.uz/apps";

const RecentConferences = () => {
  const { t } = useTranslation();
  const [conferencesArr, setConferencesArr] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const RESPONSE = await axios.get(`${BASE_URL}/conference/list/`);
        if (RESPONSE.status === 200) {
          setConferencesArr(RESPONSE.data.slice(RESPONSE.data.length - 3));
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log(conferencesArr);

  return (
    <div className="recent-conferences">
      <h4 className="recent-conferences__title">
        <strong>{t("recent_conferences")}</strong>
      </h4>
      <ul className="recent-conferences__list">
        {conferencesArr?.length > 0 &&
          conferencesArr.map((conference) => (
            <li className="recent-conferences__list-item" key={uuidv4()}>
              <div className="recent-conferences__img">
                <img src={conference.image} alt="Conference" />
              </div>
              <div className="recent-conferences__content">
                <span className="recent-conferences__date">
                  {formatterDate(conference.date_starts_time).day}{" "}
                  {formatterDate(
                    conference.date_starts_time
                  ).month_in_str.slice(0, 3)}
                  , {formatterDate(conference.date_starts_time).year}
                </span>
                <h2 className="recent-conferences__name">
                  {conference[`name_${localStorage.getItem("lang")}`]}
                </h2>
                <p className="recent-conferences__desc">
                  {conference[`description_${localStorage.getItem("lang")}`]}
                </p>
                <Link className="recent-conferences__link" to={`/detail/${conference.id}`}>Read more</Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecentConferences;
