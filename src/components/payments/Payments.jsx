import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { AlertContext } from "../../context/AlertContext";

//components
import Stepper from "./stepper/Stepper";

// steps
import Account from "./steps/Account";
import Payment from "./steps/Payment";
import UploadFile from "./steps/UploadFile";
import Alert from "../alert/Alert";

//SCSS
import "./Payments.scss";

const Payments = ({title}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if (
    searchParams.get("payment_status") === "2" &&
    searchParams.get("payment_id")
  ) {
    localStorage.setItem("payed", "1");
    localStorage.setItem("step", "3");
    localStorage.setItem("payment_id", searchParams.get("payment_id"));
  }

  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(
    localStorage.getItem("step") ? localStorage.getItem("step") : 1
  );
  const steps = ["Step 1", "Step 2", "Step 3"];

  const [paymentStatus, setPaymentStatus] = useState(null);

  const displayStep = (step) => {
    switch (parseInt(step)) {
      case 1:
        return <Account handleClick={handleClick} />;
      case 2:
        return <Payment handleClick={handleClick} />;
      case 3:
        return <UploadFile handleClick={handleClick} />;

      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    // check if steps are within bounds
    if (localStorage.getItem('isNamangan') === '1') {
      direction === "next" ? newStep += 2 : newStep -= 2;

      localStorage.setItem("step", newStep);
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    } else {
      direction === "next" ? newStep++ : newStep--;

      localStorage.setItem("step", newStep);
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
  };

  return (
    <section className="payments">
      <AlertContext.Provider value={{ setPaymentStatus }}>
        <Alert
          paymentStatus={paymentStatus}
          setPaymentStatus={setPaymentStatus}
        />
        <div className="container">
          <h3 className="payments-title line">{t(title)}</h3>
          <div className="payments__content">
            <div className="progress-title">{t("regis")}</div>
            <div className="stepper-wrapper">
              {/* Stepper */}
              <Stepper steps={steps} currentStep={currentStep} />
              {/* Display Components */}
              {displayStep(currentStep)}
            </div>
          </div>
        </div>
      </AlertContext.Provider>
    </section>
  );
};

export default Payments;
