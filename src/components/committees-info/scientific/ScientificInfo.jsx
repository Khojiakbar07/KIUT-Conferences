import committeeData from "../../../dummy-data/committee-data.json";
import { v4 as uuidv4 } from "uuid";
import "./ScientificInfo.scss";

const ScientificInfo = () => {
  return (
    <div className="committee scientific">
      <div className="container">
        <h3 className="committee-title line">{committeeData[1]?.title}</h3>
        <div className="committee-inner">
          <ul className="committee-list">
            {committeeData[1]?.data.map((item) => (
              <li className="committee-list__item" key={uuidv4()}>
                {item.director && <p>{item.director}</p>}
                <p>{item?.name}</p>
                <p>{item?.position}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScientificInfo;
