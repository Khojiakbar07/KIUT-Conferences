//component
import RecentConferences from "../recent-conferences/RecentConferences"
//images
import deanImg from "../../assets/images/dean1.jpg";
//SCSS
import "./InfoHome.scss";

const InfoHome = () => {
  return (
    <section className="home-info">
      <div className="container">
        <div className="home-info__content">
          <div className="dean-img">
            <img src={deanImg} alt="Dean of KIUT University" />
          </div>
          <div className="home-info__info">
            <h2 className="dean-name">
              <strong>Janpolat Kudaybergenov</strong>
            </h2>
            <p className="home-info__text">
              In accordance with the Decree of the President of Uzbekistan
              Republic PP-60, January 28, 2022 “On the development strategy of
              New Uzbekistan for 2022-2026”, Decree of the President of the
              Republic of Uzbekistan dated 08.10.2019 No. PF-5847 "Concept for
              the development of the higher education system of the Republic of
              Uzbekistan until 2030" April 26, 2023, at the Kimyo International
              University in Tashkent as part of the Pedagogical Forum
              "Education: a look into the future" is planned to hold the
              International Scientific and Practical Conference "Processes of
              Modernization in Education: Problems and Solutions".
            </p>
          </div>
        </div>
        <aside className="home-info__aside">
          <RecentConferences/>
        </aside>
      </div>
    </section>
  );
};

export default InfoHome;
