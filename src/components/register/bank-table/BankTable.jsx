import { useTranslation } from "react-i18next";
import "./BankTable.scss";

const BankTable = () => {
  const { t } = useTranslation();
  return (
    <table className="register__bank-table">
      <thead>
        <tr>
          <th colSpan={2}>{t("bank-table")}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="head-td">{t("bank-table")}</td>
          <td>{t("bank_name")}</td>
        </tr>
        <tr>
          <td className="head-td">{t("bank_acc")}</td>
          <td>2020 8000 0009 0096 3002</td>
        </tr>
        <tr>
          <td className="head-td">{t("swift_code")}</td>
          <td>01028</td>
        </tr>
        <tr>
          <td className="head-td">{t("bank_address")}</td>
          <td>
          {t("address_bank")}
          </td>
        </tr>
        <tr>
          <td className="head-td">{t("branch")}</td>
          <td>{t("branch_name")}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BankTable;
