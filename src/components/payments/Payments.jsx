import { useState } from "react";
import { useTranslation } from "react-i18next";

//components
import Stepper from "./stepper/Stepper";

// steps
import Account from "./steps/Account";
import Payment from "./steps/Payment";
import UploadFile from "./steps/UploadFile";

//SCSS
import "./Payments.scss";
import { useSearchParams } from "react-router-dom";

const Payments = () => {
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

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    localStorage.setItem("step", newStep);
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <section className="payments">
      <div className="container">
        <h3 className="payments-title line">{t("submission")}</h3>
        <div className="payments__content">
          <div className="progress-title">{t("regis")}</div>
          {/* Stepper */}
          <div className="stepper-wrapper">
            <Stepper steps={steps} currentStep={currentStep} />
            {/* Display Components */}
            {displayStep(currentStep)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
