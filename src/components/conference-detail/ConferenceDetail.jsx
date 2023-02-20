//tools
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { formatterDate } from "../../hooks/formatterDate";

//SCSS
import "./ConferenceDetail.scss";

//image
import forumImg from "../../assets/images/forum-img.png";

// const BASE_URL = "https://conference.alltravel.uz/apps";

const ConferenceDetail = () => {
  // const [conferenceItem, setConferenceItem] = useState([]);
  // const lang = localStorage.getItem("lang");
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const RESPONSE = await axios.get(
  //         `${BASE_URL}/conference/retrieve/${conferenceId}`
  //       );
  //       if (RESPONSE.status === 200) {
  //         setConferenceItem(RESPONSE.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, [conferenceId]);
  // console.log(conferenceItem);

  return (
    <section className="conference-info">
      <div className="container">
        <h3 className="conference-info__title line">CONFERECNCE detail</h3>
        <div className="conference-info__info">
          <div className="conference-info__img">
            <img src={forumImg} alt="Forum" />
          </div>
          <div className="conference-info__card">
            <div className="conference-info__card-title">
              <strong>Important dates</strong>
            </div>
            <ul className="conference-info__card__list">
              <li className="conference-info__card__list-item">
                <strong>Online submission</strong>
                <p>September 1. 2022</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>Online registration</strong>
                <p>March 26, 2023</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>Conference presentation</strong>
                <p>April 26-27, 2023</p>
              </li>
              <li className="conference-info__card__list-item">
                <strong>Full paper submission</strong>
                <p>May 1, 2023.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetail;
