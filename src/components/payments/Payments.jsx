import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StepperContext } from "../../contexts/StepperContext";

//components
import PaymentForm from "./payment-form/PaymentForm";
import StepperControl from "./stepper/StepperControl";
import Stepper from "./stepper/Stepper";

// steps
import Account from "./steps/Account";
import Payment from "./steps/Payment";
import UploadFile from "./steps/UploadFile";

//SCSS
import "./Payments.scss";

//images
import click from "../../assets/payment-types/click.png";
import humo from "../../assets/payment-types/Humo.png";
import uzcard from "../../assets/payment-types/Uzcard.png";

const Payments = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Step 1", "Step 2", "Step 3"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Payment />;
      case 3:
        return <UploadFile />;

      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
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
            <StepperContext.Provider value={{}} >
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
          {/* Navigation controls */}
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </section>
  );
};

export default Payments;
