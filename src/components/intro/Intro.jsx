import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// SCSS
import "./Intro.scss";

// import required modules
import { Autoplay } from "swiper";

// images
import kiutBg from "../../assets/images/intro-bg.jpg";
import namanganBg from "../../assets/images/namangan-bg.jpg";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section className="intro">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="intro-swiper"
      >
        <SwiperSlide className="intro-swiper__item">
          <Link>
            <img src={kiutBg} alt="KIUT Internation university" />
            <div className="intro-title__wrap">
              <h2 className="intro-title">{t("intro_tipf")}</h2>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img src={namanganBg} alt="KIUT Namangan" />
            <div className="intro-title__wrap">
              <h2 className="intro-title">{t("intro_namangan")}</h2>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Intro;
