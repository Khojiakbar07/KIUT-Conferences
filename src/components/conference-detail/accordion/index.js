import "./index.scss";
import { useState } from "react";

const Accordion = ({ data, multiple = false }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="accordion">
      {data.map((tab, idx) => (
        <AccordionItem
          key={idx}
          {...tab}
          active={active === idx}
          multiple={multiple}
          onToggle={(e) => setActive((a) => (a === idx ? "" : idx))}
        />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, content, active, multiple, onToggle }) => {
  const [visibility, setVisibility] = useState(false);
  const isActive = () => (multiple ? visibility : active);
  const toggleVisibility = () => {
    setVisibility((v) => !v);
    onToggle();
  };
  return (
    <div className={`accordion ${isActive() ? "active" : ""}`}>
      <div
        className="accordion-header conference-info__text accordion-title"
        onClick={toggleVisibility}
      >
        {title}
      </div>
      <div className="accordion-body conference-info__text">{content}</div>
    </div>
  );
};

export default Accordion;
