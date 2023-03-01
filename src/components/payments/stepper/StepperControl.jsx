import React from "react";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="stepper-control">
      {/* back button */}
      <button
        onClick={() => handleClick("prev")}
        className="stepper-control__btn"
        style={currentStep === 1 ? { display: "none" } : null}
      >
        Back
      </button>

      {/* next button */}
      <button
        onClick={() => handleClick("next")}
        className="stepper-control__btn"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
