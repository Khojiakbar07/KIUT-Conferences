import { useTranslation } from "react-i18next";
import "./InfoTable.scss";

const InfoTabel = () => {
  const { t } = useTranslation();
  return (
    <div className="register__info-table">
      <table className="register__info-table">
        <thead>
          <tr>
            <th>{t("category")}</th>
            <th>{t("fee")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="head-td" rowSpan={2}>
              {t("first_category")}
            </td>
            <td>{t("fee1")}</td>
          </tr>
          <tr>
            <td>{t("fee2")}</td>
          </tr>
          <tr>
            <td className="head-td">{t("second_category")}</td>
            <td>{t("fee3")}</td>
          </tr>
          <tr>
            <td className="head-td">{t("third_category")}</td>
            <td>{t("fee4")}</td>
          </tr>
        </tbody>
      </table>
      <p className="register__info-table__def">
        {t("table_desc1")}
        <br />
        {t("table_desc2")}
      </p>
    </div>
  );
};

export default InfoTabel;
