//components
import PaymentForm from "./payment-form/PaymentForm";
//SCSS
import "./Payments.scss";
//images
import scanGuide from "../../assets/images/scan-me.png";
import click from "../../assets/payment-types/click.png";
import apelsin from "../../assets/payment-types/apelsin.png";
import humo from "../../assets/payment-types/Humo.png";
import payme from "../../assets/payment-types/payme.png";
import uzcard from "../../assets/payment-types/Uzcard.png";
import masterCard from "../../assets/payment-types/master-card.png";
import visaCard from "../../assets/payment-types/visa-card.png";

const Payments = () => {
  return (
    <section className="payments">
      <div className="container">
        <h3 className="payments-title line">SUBMISSION</h3>
        <div className="payments__content">
          <div className="payments-QR"></div>
          <PaymentForm />
        </div>
        <div className="payments-guide">
          <div className="payments__scan-me">
            <img src={scanGuide} alt="You should scan QR code" />
          </div>
          <div className="payments-type">
            <img className="click" src={click} alt="You can pay via click" />
            <img className="payme" src={payme} alt="You can pay via payme" />
            <img
              className="apelsin"
              src={apelsin}
              alt="You can pay via apelsin"
            />
            <img
              className="master-card"
              src={masterCard}
              alt="You can pay via master card"
            />
            <img className="humo" src={humo} alt="You can pay via humo" />
            <img className="uzcard" src={uzcard} alt="You can pay via uzcard" />
            <img
              className="visa-card"
              src={visaCard}
              alt="You can pay via visa card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
