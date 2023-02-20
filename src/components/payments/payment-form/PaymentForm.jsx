import { useState } from "react";
import { useParams } from "react-router-dom";

//react phone number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

//SCSS
import "./PaymentForm.scss";

//icons
import { FiPlus } from "react-icons/fi";
import axios from "axios";

//BASE_URL
const BASE_URL = "https://conference.alltravel.uz/apps";

const PaymentForm = () => {
  const { conferenceId } = useParams();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCheck, setSelectedCheck] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    formData1.append("fullname", fullName);
    formData1.append("phone", phoneNumber);
    formData1.append("email", email);
    formData1.append("comment", "");
    formData1.append("support_doc", selectedFile);
    formData1.append("payment_doc", selectedCheck);
    formData1.append("conference", conferenceId);

    try {
      const RESPONSE = await axios.post(
        `${BASE_URL}/participant/create/`,
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
      <h5 className="payment-form__title">
        Open account in minutes <br /> Leave your contact details, we will call
        you back!
      </h5>
      <div className="payment-form__inputs-wrapper">
        <div className="payment-form__info-inputs">
          <div className="payment-form__input">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              placeholder="Full name..."
              value={fullName}
              id="fullName"
              required
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <div className="payment-form__input">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="Email address"
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
          <label htmlFor="work-place">Work place</label>
          <input
            type="text"
            placeholder="Work place..."
            id="work-place"
            required
          />
        </div>
        <div className="payment-form__input phone-num">
          <label htmlFor="phoneNumber">Phone Number</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            required
          />
        </div>

        <div className="upload-files__wrap">
          <div className="payment-form__input">
            <label htmlFor="chooseFile">Add a file</label>
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
            <label htmlFor="check">Add a check</label>
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
      <p className="payment-form__accept-text">
        You can attach (.zip, .pdf, .doc, .docx, .png, .jpg, .jpeg that are less
        than 5MB/file, limit 3 files)
      </p>
      <div className="submit">
        <button className="payment-form__btn-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
