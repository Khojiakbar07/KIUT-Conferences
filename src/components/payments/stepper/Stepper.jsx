import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import "./Stepper.scss";

const Stepper = ({ steps, currentStep }) => {
  const { t } = useTranslation();
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    // create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div key={uuidv4()} className="steps">
        <div className="steps-wrap">
          <div className={`step-round ${step.selected ? "selected" : ""}`}>
            {/* Display number */}
          </div>
          <div className="step-desc">
            {/* Display description */}
            {t("step")} {index + 1}
          </div>
        </div>
        <div
          className="stepper-line"
          style={
            step.completed
              ? { borderColor: "#007BFF" }
              : { borderColor: "#D1D5DB" }
          }
        >
          {/* Display line */}
        </div>
      </div>
    );
  });

  return <div className="stepper">{displaySteps}</div>;
};

export default Stepper;
