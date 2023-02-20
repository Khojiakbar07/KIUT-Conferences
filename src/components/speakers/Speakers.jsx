import "./Speakers.scss";

//images
import speaker1 from "../../assets/speakers/speaker1.jpg";

const Speakers = () => {
  return (
    <section className="speakers">
      <h3 className="speakers-title line">Speakers</h3>
      <div className="container">
        <div className="speakers-content">
          <div className="speakers-box">
            <img src={speaker1} alt="speaker" />
            <div className="speakers-box__info">
              <h4 className="speakers-box__info-name">Emma Sophia</h4>
              <p className="speakers-box__info-job">WEB DEVELOPER</p>
            </div>
          </div>
          <div className="speakers-box">
            <img src={speaker1} alt="speaker" />
            <div className="speakers-box__info">
              <h4 className="speakers-box__info-name">Emma Sophia</h4>
              <p className="speakers-box__info-job">WEB DEVELOPER</p>
            </div>
          </div>
          <div className="speakers-box">
            <img src={speaker1} alt="speaker" />
            <div className="speakers-box__info">
              <h4 className="speakers-box__info-name">Emma Sophia</h4>
              <p className="speakers-box__info-job">WEB DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
