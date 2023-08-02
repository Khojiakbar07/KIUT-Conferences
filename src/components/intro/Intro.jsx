// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// SCSS
import "./Intro.scss";

// import required modules
// import { Autoplay } from "swiper";

// images
import kiutBg from "../../assets/images/intro-bg.jpg";

const Intro = () => {
  return (
    <section className="intro">
      <Swiper
        slidesPerView={1}
        loop={false}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        modules={[]}
        className="intro-swiper"
      >
        <SwiperSlide className="intro-swiper__item">
          {/* <Link to="/detail"> */}
            <img src={kiutBg} alt="KIUT Internation university" />
            <div className="intro-title__wrap">
              <h2 className="intro-title">KIMYO INTERNATION UNIVERSITY IN TASHKENT</h2>
            </div>
          {/* </Link> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Intro;
