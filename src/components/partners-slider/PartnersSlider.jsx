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
import iuas from "../../assets/partners/iuas.png";
import vosiqSchool from "../../assets/partners/vosiq-school.png";
import eurasia from "../../assets/partners/Science-in-Eurasia.png";
import britishCouncil from "../../assets/partners/British-Council.png";
import daegu from "../../assets/partners/Daegu.png";
import gachong from "../../assets/partners/Gachong.png";
import hanyang from "../../assets/partners/Hanyang.png";
import koren from "../../assets/partners/koren.png";
import num from "../../assets/partners/num.png";
import riga from "../../assets/partners/riga.png";

const partnersLogoArr = [
  itPark,
  iuas,
  vosiqSchool,
  eurasia,
  daegu,
  num,
  gachong,
  britishCouncil,
  hanyang,
  riga,
  koren,
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
