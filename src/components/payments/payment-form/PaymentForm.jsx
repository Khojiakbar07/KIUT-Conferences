//SCSS
import "./PaymentForm.scss";

//icons
import { FiPlus } from "react-icons/fi";

const PaymentForm = () => {
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
          <input type="text" placeholder="Full name..." id="email" required />
        </div>
        <div className="payment-form__input">
          <label htmlFor="chooseFile">Add a file</label>
          <div className="file-upload">
            <input
              type="file"
              placeholder="Choose file"
              id="chooseFile"
              accept="image/jpg, image/png, image/jpeg, .doc, .docx, .zip, .pdf"
              required
            />
            <FiPlus className="plus-icon" />
          </div>
        </div>
        <div className="payment-form__input">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            placeholder="Phone Number"
            id="phoneNumber"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
