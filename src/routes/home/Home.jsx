// components
import CreateEventLink from "../../components/create-event-link/CreateEventLink";
import Intro from "../../components/intro/Intro";
import PartnersSlider from "../../components/partners-slider/PartnersSlider";
const Home = () => {
  return (
    <main>
      <Intro />
      <CreateEventLink/>
      <PartnersSlider/>
    </main>
  );
};

export default Home;
