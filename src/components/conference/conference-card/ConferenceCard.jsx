//tools
import { Link } from "react-router-dom";

//icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import demoImg from "../../../assets/images/demo.jpg";

//SCSS
import "./ConferenceCard.scss";

const ConferenceCard = ({ conference }) => {
  console.log(conference);
  return (
    <div className="conference-card">
      <div className="conference-card__img">
        {/* {conference?.image} */}
        <img src={demoImg} alt="Conference" />
      </div>
      <div className="conference-card__content">
        <h2 className="conference-card__title">
          {/* {conference?.[`name_${localStorage.getItem("lang")}`]} */}
          International Pedagogical Forum – Education: A Look Into The Future
          (TIPF 2023)
        </h2>
        <p className="conference-card__desc">
          {/* {conference?.[`description_${localStorage.getItem("lang")}`]} */}
          The Organizational Committee is delighted to announce that the
          Tashkent International Pedagogical Forum – Education: A Look Into The
          Future (TIPF 2023) will be held on April 26-27, 2023 at the Kimyo
          International University in Tashkent (Uzbekistan) as hybrid, i.e. both
          in-person and virtually. Thus, the participants from all over the
          world will have the opportunity to participate both physically and
          online, depending on their preferences.
        </p>
        <Link className="conference-card__link" to={`/detail`}>
          <span>Read More</span> <HiOutlineArrowLongRight />
        </Link>
      </div>
    </div>
  );
};

export default ConferenceCard;
