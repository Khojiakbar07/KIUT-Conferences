import { useState } from "react";
//react phone number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

//SCSS
import "./PaymentForm.scss";

//icons
import { FiPlus } from "react-icons/fi";

const PaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form className="payment-form">
      <h5 className="payment-form__title">
        Open account in minutes <br /> Leave your contact details, we will call
        you back!
      </h5>
      <div className="payment-form__inputs-wrapper">
        <div className="payment-form__input">
          <label htmlFor="fullName">Full name</label>
          <input
            type="text"
            placeholder="Full name..."
            id="fullName"
            required
          />
        </div>
        <div className="payment-form__input">
          <label htmlFor="email">Email address</label>
          <input type="text" placeholder="Email address" id="email" required />
        </div>
        <div className="payment-form__input">
          <label htmlFor="chooseFile">Add a file</label>
          <div className="file-upload">
            <input
              type="file"
              id="chooseFile"
              accept="image/jpg, image/png, image/jpeg, .doc, .docx, .zip, .pdf"
              required
            />
            <FiPlus className="plus-icon" />
          </div>
          
        </div>
        <div className="payment-form__input">
          <label htmlFor="phoneNumber">Phone Number</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            required
          />
        </div>
        <div className="payment-form__input">
        <label htmlFor="check">Add a check</label>
          <div className="file-upload">
            <input
              type="file"
              id="check"
              accept="image/jpg, image/png, image/jpeg, .doc, .docx, .zip, .pdf"
              required
            />
            <FiPlus className="plus-icon" />
          </div>
        </div>
      </div>
      <p className="payment-form__accept-text">You can attach (.zip, .pdf, .doc, .docx, .png, .jpg, .jpeg that are less than 5MB/file, limit 3 files)</p>
      <button className="payment-form__btn-submit" type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
