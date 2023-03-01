import { useState } from "react";
import { useTranslation } from "react-i18next";

//react phone number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

//SCSS
import "./Account.scss";

export default function Account({ handleClick }) {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [workedPlace, setWorkedPlace] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("accounted", true);
    localStorage.setItem("fullname", fullName);
    localStorage.setItem("worked_place", workedPlace);
    localStorage.setItem("phone", phoneNumber);
    localStorage.setItem("email", email);
  };

  return (
    <form className="account-form" onSubmit={handleSubmit}>
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
      <button
        onClick={() => handleClick("next")}
        className="account-form__submit-btn"
      >
        Next
      </button>
    </form>
  );
}
