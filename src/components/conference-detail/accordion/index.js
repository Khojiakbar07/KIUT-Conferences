import "./index.scss";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

//icon
import { FiChevronDown } from "react-icons/fi";

const Accordion = ({ data, multiple = false }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="accordion-wrapper">
      {data.map((tab, idx) => (
        <AccordionItem
          key={uuidv4()}
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
        <span>{title}</span>
        <span className="accordion-icon">
          <FiChevronDown />
        </span>
      </div>
      <div className="accordion-body conference-info__text">
        {content.map(({ text }) => (
          <p className="conference-info__text accordion-text" key={uuidv4()}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
