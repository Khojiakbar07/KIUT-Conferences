import { useState } from "react";
import { useTranslation } from "react-i18next";

//SCSS
import "./PaymentForm.scss";

const PaymentForm = () => {
  // const {conferenceId} = useParams();

  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <form className="payment-form" encType="multipart/form-data">
      <div className="payment-form__inputs-wrapper">
        <div className="payment-form__info-inputs"></div>

        <div className="upload-files__wrap">
          <div className="payment-form__input">
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
            </div>
          </div>
        </div>
      </div>
      <div className="submit">
        <button className="payment-form__btn-submit" type="submit"></button>
      </div>
    </form>
  );
};

export default PaymentForm;
