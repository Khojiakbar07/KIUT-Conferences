import "./Payment.scss";

//images
import click from "../../../assets/payment-types/click.png";
import humo from "../../../assets/payment-types/Humo.png";
import uzcard from "../../../assets/payment-types/Uzcard.png";

//icon
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

export default function Payment({ handleClick }) {
  return (
    <div className="payment">
      <div className="payment-type__wrap">
        <div className="payment-type">
          <img
            width={160}
            height={143}
            className="payment-img"
            src={uzcard}
            alt="Payment via Uzcard"
          />
          <a className="payment-link" href="/">
            uz card pay
          </a>
        </div>
        <div className="payment-type">
          <img
            width="160px"
            height="110"
            className="payment-img humo"
            src={humo}
            alt="Payment via Humo"
          />
          <a className="payment-link" href="/">
            uz humo card pay
          </a>
        </div>
      </div>
      <button onClick={() => handleClick("prev")} className="prev-btn">
        <HiOutlineArrowLongLeft className="prev-icon" />
        Back
      </button>
      <img className="click-img" src={click} alt="Pay via Click" />
    </div>
  );
}
