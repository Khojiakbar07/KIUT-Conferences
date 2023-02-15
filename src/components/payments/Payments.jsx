//components
import PaymentForm from "./payment-form/PaymentForm";
//SCSS
import "./Payments.scss";
const Payments = () => {
  return (
    <section className="payments">
      <div className="container">
        <PaymentForm/>
      </div>
    </section>
  );
};

export default Payments;
