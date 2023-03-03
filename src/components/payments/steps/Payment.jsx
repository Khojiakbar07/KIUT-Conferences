import "./Payment.scss";

//images
import click from "../../../assets/payment-types/click.png";
import humo from "../../../assets/payment-types/Humo.png";
import uzcard from "../../../assets/payment-types/Uzcard.png";

//icon
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export default function Payment({ handleClick }) {
  const transaction_param = localStorage.getItem("email");
  const { t } = useTranslation();

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
          <form
            id="click_form"
            action="https://my.click.uz/services/pay"
            method="get"
            target="_blank"
            className={"payment-form"}
          >
            <input type="hidden" name="amount" value="1000" />
            <input type="hidden" name="merchant_id" value="18893" />
            <input type="hidden" name="merchant_user_id" value="30373" />
            <input type="hidden" name="service_id" value="26597" />
            <input
              type="hidden"
              name="transaction_param"
              value={transaction_param}
            />
            <input
              type="hidden"
              name="return_url"
              value="https://conference.kiut.uz/submission"
            />
            <input type="hidden" name="card_type" value="uzcard" />
            <button type="submit" className="payment-link">
              {t("pay_with")} UzCard
            </button>
          </form>
        </div>
        <div className="payment-type">
          <img
            width="160px"
            height="110"
            className="payment-img humo"
            src={humo}
            alt="Payment via Humo"
          />
          <form
            id="click_form"
            action="https://my.click.uz/services/pay"
            method="get"
            target="_blank"
            className={"payment-form"}
          >
            <input type="hidden" name="amount" value="1000" />
            <input type="hidden" name="merchant_id" value="18893" />
            <input type="hidden" name="merchant_user_id" value="30373" />
            <input type="hidden" name="service_id" value="26597" />
            <input
              type="hidden"
              name="transaction_param"
              value={transaction_param}
            />
            <input
              type="hidden"
              name="return_url"
              value="https://conference.kiut.uz/submission"
            />
            <input type="hidden" name="card_type" value="humo" />
            <button type="submit" className="payment-link">
              {t("pay_with")} Humo
            </button>
          </form>
        </div>
      </div>
      <button onClick={() => handleClick("prev")} className="prev-btn">
        <HiOutlineArrowLongLeft className="prev-icon" />
        {t("back")}
      </button>
      {localStorage.getItem("payed") === "1" ? (
        <button onClick={() => handleClick("next")} className={"prev-btn"}>
          {t("next")}
          <HiOutlineArrowLongRight className="right-icon" />
        </button>
      ) : null}
      <img className="click-img" src={click} alt="Pay via Click" />
    </div>
  );
}
