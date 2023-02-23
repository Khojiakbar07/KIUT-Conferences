import "./Requirement.scss";

const Requirement = () => {
  return (
    <div className="requirement">
      <div className="container">
        <h3 className="requirement-title line">Requirement</h3>
        <div className="requirement-inner">
          <p className="requirement-text requirement-text__title">
            Scientific articles must be thoroughly edited, and must also meet
            all the technical requirements for registration, namely:
          </p>
          <ul>
            <li>
              <p className="requirement-text">
                {" "}
                - text editor - MS Word 2007, 2010;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - page size - A4, 20mm margin on each side;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - font - Times New Roman, size - 14;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - line spacing and paragraph spacing - 1.5;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - the volume of the article is at least 5-8 full pages;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - in the right corner indicate the full surname, name and
                patronymic, scientific degree and title, position, company name,
                and the name of the scientific material in bold in the middle of
                the line;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - all tables, diagrams and figures must be in MS Word format,
                Times New Roman font, the name of diagrams and figures should be
                indicated below, and tables - above;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - all graphs and diagrams must be in e MS format Excel ;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - formulas must be written in the MS Equation editor;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - sources should be indicated in tables, figures and graphs and
                references to them in the text ;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - links should be located at the bottom of each page;
              </p>
            </li>
            <li>
              <p className="requirement-text">
                {" "}
                - a scientific article can be submitted in Uzbek, Russian or
                English.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
