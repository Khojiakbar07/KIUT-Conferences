// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//SCSS
import "./PartnersSlider.scss";

// import required modules
import { Autoplay } from "swiper";

//partners' logos
import itPark from "../../assets/partners/it-park.png";
import akfa from "../../assets/partners/akfa.png";
import hyatt from "../../assets/partners/hyatt_regency.png";
import iuas from "../../assets/partners/iuas.png";
import mimar from "../../assets/partners/mimar-group.png";
import oxbridgeSchool from "../../assets/partners/oxbridge-school.png";
import uzbekistan from "../../assets/partners/uzbekistan.png";
import vosiqSchool from "../../assets/partners/vosiq-school.png";

const partnersLogoArr = [
  itPark,
  akfa,
  hyatt,
  iuas,
  mimar,
  oxbridgeSchool,
  uzbekistan,
  vosiqSchool,
];

const PartnersSlider = () => {
  return (
    <section className="partners">
      <div className="container">
        <h3 className="partners-title">OUR PARTNERS</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="partners-swiper"
        >
          {partnersLogoArr.map((partner) => (
            <SwiperSlide className="partners-swiper__item">
              <img src={partner} alt="Partners' logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSlider;
