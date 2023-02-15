// components
import InfoHome from "../../components/info-home/InfoHome";
import Intro from "../../components/intro/Intro";
import PartnersSlider from "../../components/partners-slider/PartnersSlider";
import Speakers from "../../components/speakers/Speakers";

const Home = () => {
  return (
    <main>
      <Intro title={"kiut"} />
      <InfoHome />
      <Speakers />
      <PartnersSlider />
    </main>
  );
};

export default Home;
