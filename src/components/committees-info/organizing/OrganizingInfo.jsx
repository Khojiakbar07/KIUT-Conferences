import committeeData from "../../../dummy-data/committee-data.json";
import { v4 as uuidv4 } from "uuid";
import "./OrganizingInfo.scss";
import { useTranslation } from "react-i18next";
const lang = localStorage.getItem("lang");

const OrganizingInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="committee organizing">
      <div className="container">
        <h3 className="committee-title line">{t("organiza")}</h3>
        <div className="committee-inner">
          <ul className="committee-list">
            {committeeData[0]?.[`${lang}`].map((item) => (
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

export default OrganizingInfo;
