import { useState } from "react";
import { useTranslation } from "react-i18next";

//react phone number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

//SCSS
import "./Account.scss";

//icons
import { FiPlus } from "react-icons/fi";
import axios from "axios";

export default function Account() {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState(
    localStorage.getItem("fullname") || ""
  );
  const [workedPlace, setWorkedPlace] = useState(
    localStorage.getItem("worked_place") || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phone") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  return (
    <form className="account-form">
      <div className="account-form__inputs">
        <div className="payment-form__input flex">
          <label htmlFor="fullName">{t("fullname")}</label>
          <input
            type="text"
            placeholder={t("fullname")}
            value={fullName}
            id="fullName"
            required
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <div className="payment-form__input flex">
          <label htmlFor="work-place">{t("work")}</label>
          <input
            type="text"
            placeholder={t("work")}
            id="work-place"
            onChange={(e) => {
              setWorkedPlace(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div className="payment-form__input phone-num">
        <label htmlFor="phoneNumber">{t("phoneNumber")}</label>
        <PhoneInput
          id="phoneNumber"
          placeholder={t("phoneNumber")}
          value={phoneNumber}
          onChange={setPhoneNumber}
          required
        />
      </div>
      <div className="payment-form__input email-input">
          <label htmlFor="email">{t("email")}</label>
          <input
            type="email"
            placeholder={t("email")}
            value={email}
            id="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
    </form>
  );
}
