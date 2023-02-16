//tools
import { Link } from "react-router-dom";

//icons
import { HiOutlineArrowLongRight } from "react-icons/hi2";

//SCSS
import "./ConferenceCard.scss";

const ConferenceCard = ({ conference }) => {
  console.log(conference);
  return (
    <div className="conference-card">
      <div className="conference-card__img">
        <img src={conference.image} alt="Conference" />
      </div>
      <div className="conference-card__content">
        <h2 className="conference-card__title">
          {conference[`name_${localStorage.getItem("lang")}`]}
        </h2>
        <p className="conference-card__desc">
          {conference[`description_${localStorage.getItem("lang")}`]}
        </p>
        <Link
          className="conference-card__link"
          to={`conference/detail/${conference.id}`}
        >
          <span>Узнать больше</span> <HiOutlineArrowLongRight />
        </Link>
      </div>
    </div>
  );
};

export default ConferenceCard;
