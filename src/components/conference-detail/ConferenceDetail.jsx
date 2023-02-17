//tools
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatterDate } from "../../hooks/formatterDate";

//SCSS
import "./ConferenceDetail.scss";

//BASE_URL
const BASE_URL = "https://conference.alltravel.uz/apps";

const ConferenceDetail = () => {
  const { conferenceId } = useParams();
  const [conferenceItem, setConferenceItem] = useState([]);
  const lang = localStorage.getItem("lang");
  useEffect(() => {
    (async () => {
      try {
        const RESPONSE = await axios.get(
          `${BASE_URL}/conference/retrieve/${conferenceId}`
        );
        if (RESPONSE.status === 200) {
          setConferenceItem(RESPONSE.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [conferenceId]);
  console.log(conferenceItem);

  return (
    <section className="conference-info">
      <div className="container">
        <div className="conference-info__hero">
          <h2 className="conference-info__name">
            {conferenceItem?.[`name_${lang}`]}
          </h2>
          <div className="conference-info__img">
            <img src={conferenceItem?.image} alt="Conference" />
          </div>
        </div>
        <div className="conference-info__content">
          <p className="conference-info__desc">
            {conferenceItem?.[`description_${lang}`]}
          </p>
          <div className="conference-info__info">
            <div className="conference-info__card">
              <ul className="conference-info__card__list">
                <li className="conference-info__card__list-item">
                  <strong>Fee</strong>
                  <p>{conferenceItem?.[`price_${lang}`]}</p>
                </li>
                <li className="conference-info__card__list-item">
                  <strong>Date and Time</strong>
                  <p>{`${formatterDate(conferenceItem?.date_starts_time).day}.${
                    formatterDate(conferenceItem?.date_starts_time).month
                  }.${
                    formatterDate(conferenceItem?.date_starts_time).year
                  }`}</p>
                </li>
                <li className="conference-info__card__list-item">
                  <strong>Address</strong>
                  <p>Usman Nasyr Street, 156, 100121 Tashkent</p>
                </li>
              </ul>
            </div>
            <Link className="conference-info__payment-link" to="/payment">Payment</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetail;
