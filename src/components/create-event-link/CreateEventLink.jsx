//tools
import { Link } from "react-router-dom";
//images
// import imagePeople from "../../assets/images/create-event-img.png"

//SCSS
import "./CreateEventLink.scss";

const CreateEventLink = () => {
  return (
    <section className="create-event">
      <div className="container">
        <div className="create-event__content">
          <h3 className="create-event__title">
            <strong>Make your own event</strong>
          </h3>
          <p className="create-event__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <Link to="/" className="create-event__link">Create Events</Link>
        </div>
      </div>
    </section>
  );
};

export default CreateEventLink;
