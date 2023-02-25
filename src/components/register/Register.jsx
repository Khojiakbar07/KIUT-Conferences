import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BankTable from "./bank-table/BankTable";
import InfoTable from "./info-table/InfoTable";

import "./Register.scss";

const Register = () => {
  const { t } = useTranslation();
  return (
    <section className="register">
      <div className="container">
        <div className="register-inner">
          <h3 className="register-title line">{t("registrat")}</h3>
          <p className="register-text">
            {t("all")}
          </p>
          <InfoTable />
          <BankTable />
          <Link to="/submission" className="register-link">
            {t("submit")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
