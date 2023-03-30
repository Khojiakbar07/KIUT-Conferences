import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

//react phone number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

//icon
import { FiChevronDown } from "react-icons/fi";

//SCSS
import "./Account.scss";

// data
import dropdownData from "../../../dummy-data/dropdown-data.json";
import dropdownDataNamangan from "../../../dummy-data/dropdown-data-namangan.json";

export default function Account({ handleClick }) {
    const { pathname } = useLocation();
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
    const [bill, setBill] = useState("");

    // dropdown
    const dropdownPlaceholder = t("select") + "...";
    const [isDropdownActive, setDropdownActive] = useState(false);
    const [selected, setSelected] = useState(dropdownPlaceholder);

    const isNamangan = pathname === "/submission/namangan";
    const renderData = isNamangan ? dropdownDataNamangan : dropdownData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("accounted", true);
        localStorage.setItem("fullname", fullName);
        localStorage.setItem("worked_place", workedPlace);
        localStorage.setItem("phone", phoneNumber);
        localStorage.setItem("email", email);
        localStorage.setItem("conference", selected);
        localStorage.setItem("bill", bill);
        localStorage.setItem("isNamangan", isNamangan);
        selected !== dropdownPlaceholder ? handleClick("next") : <></>;
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
                        value={workedPlace}
                        id="work-place"
                        onChange={(e) => {
                            setWorkedPlace(e.target.value);
                        }}
                        required
                    />
                </div>
            </div>
            <div className="account-form__inputs">
                <div className="payment-form__input phone-num flex">
                    <label htmlFor="phoneNumber">{t("phoneNumber")}</label>
                    <PhoneInput
                        id="phoneNumber"
                        placeholder={t("phoneNumber")}
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        required
                    />
                </div>
                <div className="payment-form__input email-input flex">
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
            </div>
            <div className="account-form__select payment-form__input">
                <label htmlFor="dropdown">{t("conference_section")}</label>
                <div
                    className={`dropdown flex ${
                        isDropdownActive ? "active" : ""
                    }`}
                    id="dropdown"
                >
                    <div
                        className="dropdown-btn"
                        onClick={() => {
                            setDropdownActive(!isDropdownActive);
                        }}
                    >
                        <span>{selected}</span>{" "}
                        <span className="down-icon">
                            <FiChevronDown />
                        </span>
                    </div>
                    <ul className="dropdown-content">
                        {renderData?.[0]?.[localStorage.getItem("lang")].map(
                            ({ data }, idx) => (
                                <li
                                    onClick={(e) => {
                                        setSelected(e.target.textContent);
                                        setDropdownActive(false);
                                    }}
                                    key={uuidv4()}
                                    className="dropdown-content__item"
                                >
                                    <span className="dropdown-content__text">
                                        {idx + 1}. {data}
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
            {!isNamangan ? (
                <div className="payment-form__input bill flex">
                    <label htmlFor="bill">{t("payment")}</label>
                    <input
                        type="number"
                        placeholder={t("payment_amount")}
                        value={bill}
                        id="bill"
                        required
                        onChange={(e) => {
                            setBill(e.target.value);
                        }}
                    />
                </div>
            ) : (
                <></>
            )}
            <button className="account-form__submit-btn">{t("next")}</button>
        </form>
    );
}
