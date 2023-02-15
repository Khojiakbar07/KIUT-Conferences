//images
import homeInfoImg1 from "../../assets/images/home-info-img1.jpg";
import homeInfoImg2 from "../../assets/images/home-info-img2.jpg";
//SCSS
import "./InfoHome.scss";

const InfoHome = () => {
  return (
    <section className="home-info">
      <div className="container">
        <h2 className="home-info__title">Let's Grow Together</h2>
        <div className="home-info__content">
          <div className="home-info__content-box">
            <div className="home-info__img">
              <img src={homeInfoImg1} alt="" />
            </div>
            <p className="home-info__text">
              Considering the current COVID-19 pandemic situation, ICEF 2022
              will be held as a hybrid event; a combination of "live" face to
              face event and a "virtual" online component. ICEF 2022
              Registration can be done on-line, and both USD and KRW are
              accepted.The participants are recommended to make registration in
              advance to get an early registration discount. Online
              RegistrationPlease sign in with your ID and visit the Online
              Registration page to fill out the registration form.
            </p>
          </div>

          <div className="home-info__content-box">
            <p className="home-info__text">
              Considering the current COVID-19 pandemic situation, ICEF 2022
              will be held as a hybrid event; a combination of "live" face to
              face event and a "virtual" online component. ICEF 2022
              Registration can be done on-line, and both USD and KRW are
              accepted.The participants are recommended to make registration in
              advance to get an early registration discount. Online
              RegistrationPlease sign in with your ID and visit the Online
              Registration page to fill out the registration form.
            </p>
            <div className="home-info__img">
              <img src={homeInfoImg2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoHome;
