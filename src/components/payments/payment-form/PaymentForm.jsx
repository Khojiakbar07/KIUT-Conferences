import { useState } from "react";
import { useTranslation } from "react-i18next";

//react phone number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

//SCSS
import "./PaymentForm.scss";

//icons
import { FiPlus } from "react-icons/fi";
import axios from "axios";

//BASE_URL
const BASE_URL = "https://conference.kiut.uz/api";

const PaymentForm = () => {
  // const {conferenceId} = useParams();
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [workedPlace, setWorkedPlace] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCheck, setSelectedCheck] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    formData1.append("fullname", fullName);
    formData1.append("worked_place", workedPlace);
    formData1.append("phone", phoneNumber);
    formData1.append("email", email);
    formData1.append("comment", "");
    formData1.append("support_doc", selectedFile);
    formData1.append("payment_doc", selectedCheck);
    formData1.append("conference", null);

    try {
      const RESPONSE = await axios.post(
        `${BASE_URL}/apps/participant/create/`,
        formData1
      );
      if (RESPONSE.status === 201) {
        alert("Your information has been sent successfully!");
      } else {
        alert(
          "Upload a valid image. The file you uploaded was either not an image or a corrupted image!"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="payment-form"
      encType="multipart/form-data"
    >
      <h5 className="payment-form__title">{t("registrat")}</h5>
      <div className="payment-form__inputs-wrapper">
        <div className="payment-form__info-inputs">
          <div className="payment-form__input">
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
          <div className="payment-form__input">
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
        <div className="payment-form__input work-place">
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

        <div className="upload-files__wrap">
          <div className="payment-form__input">
            <label htmlFor="chooseFile">{t("file")}</label>
            <div className="file-upload">
              <input
                type="file"
                id="chooseFile"
                accept="image/jpg, image/png, image/jpeg, .doc, .docx, .zip, .pdf"
                required
                onChange={(e) => {
                  setSelectedFile(e.target.files[0]);
                }}
              />
              <FiPlus className="plus-icon" />
            </div>
          </div>

          <div className="payment-form__input">
            <label htmlFor="check">{t("check")}</label>
            <div className="file-upload">
              <input
                type="file"
                id="check"
                accept="image/jpg, image/png, image/jpeg"
                required
                onChange={(e) => {
                  setSelectedCheck(e.target.files[0]);
                }}
              />
              <FiPlus className="plus-icon" />
            </div>
          </div>
        </div>
      </div>
      <p className="payment-form__accept-text">{t("attach")}</p>
      <div className="submit">
        <button className="payment-form__btn-submit" type="submit">
          {t("submit")}
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
