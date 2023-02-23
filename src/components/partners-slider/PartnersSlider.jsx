import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
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
import eurasia from "../../assets/partners/Science-in-Eurasia.png";

const partnersLogoArr = [
  itPark,
  akfa,
  hyatt,
  iuas,
  mimar,
  oxbridgeSchool,
  uzbekistan,
  vosiqSchool,
  eurasia,
];

const PartnersSlider = () => {
  const { t } = useTranslation();
  return (
    <section className="partners">
      <h3 className="partners-title line">{t("patr")}</h3>
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="partners-swiper"
        >
          {partnersLogoArr.map((partner) => (
            <SwiperSlide key={uuidv4()} className="partners-swiper__item">
              <img src={partner} alt="Partners' logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSlider;
