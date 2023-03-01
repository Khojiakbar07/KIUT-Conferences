import { useTranslation } from "react-i18next";
//components
import PaymentForm from "./payment-form/PaymentForm";
//SCSS
import "./Payments.scss";
//images
import click from "../../assets/payment-types/click.png";
import humo from "../../assets/payment-types/Humo.png";
import uzcard from "../../assets/payment-types/Uzcard.png";

const Payments = () => {
  const { t } = useTranslation();
  return (
    <section className="payments">
      <div className="container">
        <h3 className="payments-title line">{t("submission")}</h3>
        <div className="payments__content"></div>
      </div>
    </section>
  );
};

export default Payments;
