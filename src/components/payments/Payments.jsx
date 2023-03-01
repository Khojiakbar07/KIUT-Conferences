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



const Payments = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Step 1", "Step 2", "Step 3"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <Account handleClick={handleClick} />
        );
      case 2:
        return <Payment handleClick={handleClick} />;
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
            {displayStep(currentStep)}
          </div>
          {/* Navigation controls */}
          {/* <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Payments;
