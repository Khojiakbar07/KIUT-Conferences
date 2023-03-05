//icons
import errorIcon from "../../assets/ui-icons/error.svg";
import successIcon from "../../assets/ui-icons/success.svg";

// SCSS
import "./Alert.scss";

export default function Alert({ paymentStatus }) {
  console.log(paymentStatus);
  return (
    <div className="alert">
      <h5 className="alert-title line">SUCCSESSFULly registrated!</h5>
      <img className="alert-icon" src={successIcon} alt="" />
      <strong className="alert-message">Success</strong>
      <button className="alert-btn">OK</button>
    </div>
  );
}
