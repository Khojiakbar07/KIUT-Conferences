//icons
import { useEffect, useState } from "react";
import errorIcon from "../../assets/ui-icons/error.svg";
import successIcon from "../../assets/ui-icons/success.svg";

// SCSS
import "./Alert.scss";

export default function Alert({ paymentStatus, setPaymentStatus }) {
  const [resMessage, setResMessage] = useState("");
  useEffect(() => {
    if (paymentStatus === 201) {
      setResMessage("Successfully registrated!");
    } else {
      setResMessage("Something went wrong!");
    }
  }, [paymentStatus]);
  console.log(paymentStatus);

  const handleClick = () => {
    if (paymentStatus === 201) {
      localStorage.clear();
      window.location.reload();
    }
    setPaymentStatus(null);
  };

  return (
    <div className={`alert ${paymentStatus ? "active" : ""}`}>
      <h5 className="alert-title line">{resMessage}</h5>
      <img
        className="alert-icon"
        src={paymentStatus === 201 ? successIcon : errorIcon}
        alt=""
      />
      <strong
        style={
          paymentStatus === 201 ? { color: "#27ae60" } : { color: "#f21e1e" }
        }
        className="alert-message"
      >
        {paymentStatus === 201 ? "Success" : "Error"}
      </strong>
      <button onClick={handleClick} className="alert-btn">
        {paymentStatus === 201 ? "OK" : "Try again"}
      </button>
    </div>
  );
}