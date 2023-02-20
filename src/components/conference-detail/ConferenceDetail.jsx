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
        <div className="conference-info__content">
          <p className="conference-info__text">
            The Organizational Committee is delighted to announce that the
            Tashkent International Pedagogical Forum – Education: A Look Into
            The Future (TIPF 2023) will be held on April 26-27, 2023 at the
            Kimyo International University in Tashkent (Uzbekistan) as hybrid,
            i.e. both in-person and virtually. Thus, the participants from all
            over the world will have the opportunity to participate both
            physically and online, depending on their preferences.
          </p>
          <p className="conference-info__text">
            The conference is part of the Central Asian Research and Technology
            Initiative (CARTI), a series of research conferences, seminars, and
            workshops in 2023 to reflect the emerging research agenda in
            priority areas of science and technology. The CARTI Initiative is
            sponsored by the Science in Eurasia Association, a Dubai Science
            Park Resident (Dubai, UAE).
          </p>
          <strong className="conference-info__text">
            Thematic Tracks for TIPF 2023
          </strong>
          <ol>
            <li>
              <span className="conference-info__text">
                1. Current Pedagogical and Information Technologies in Teaching
                Economic Disciplines.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                2. Current Methods of Teaching Exact Sciences.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                3. Innovative Pedagogical Excellence In Teaching History.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                4. New Methods of Teaching Social and Humanitarian Disciplines.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                5. Current Trends in Architecture and Construction.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                6. Advanced Methods in Teaching Languages and Literature.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                7. Advanced Experience in Teaching Contemporary Psychology.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                8. Methods of Teaching in Preschool and Primary Education.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                9. Teaching Theory and Practice in the Arts.
              </span>
            </li>
            <li>
              <span className="conference-info__text">
                10. Current Trends in Fashion Design and Problems in the System
                of Art Education.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetail;
