// SCSS
import "./Intro.scss";

const Intro = ({title}) => {
  return (
    <section className="intro">
      <div className="container">
        <h2 className="intro-title section-title">{title}</h2>
      </div>
    </section>
  );
};

export default Intro;
