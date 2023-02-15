import "./Speakers.scss";

//images
import speaker1 from "../../assets/speakers/speaker1.jpg";
import speaker2 from "../../assets/speakers/speaker2.jpg";
import speaker3 from "../../assets/speakers/speaker3.jpg";
import speaker4 from "../../assets/speakers/speaker4.jpg";

const Speakers = () => {
  return (
    <section className="speakers">
      <h3 className="speakers-title">Speakers</h3>
      <div className="container">
        <div className="speakers-content">
          <div className="speakers-box">
            <div className="speakers-img">
              <img src={speaker1} alt="Robert Kiyosaki" />
            </div>
            <p className="speakers-name">Robert Kiyosaki</p>
          </div>
          <div className="speakers-box">
            <div className="speakers-img">
              <img src={speaker2} alt="Robert Kiyosaki" />
            </div>
            <p className="speakers-name">Tony Robbins</p>
          </div>
          <div className="speakers-box">
            <div className="speakers-img">
              <img src={speaker3} alt="Robert Kiyosaki" />
            </div>
            <p className="speakers-name">Bill Gates</p>
          </div>
          <div className="speakers-box">
            <div className="speakers-img">
              <img src={speaker4} alt="Robert Kiyosaki" />
            </div>
            <p className="speakers-name">Batyrkhan Beysembekov</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
