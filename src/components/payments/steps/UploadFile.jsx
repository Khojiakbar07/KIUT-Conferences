import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

//icon
import { FiPlus } from "react-icons/fi";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

// SCSS
import "./UploadFile.scss";

//BASE_URL
const BASE_URL = "https://conference.kiut.uz/api";

export default function UploadFile({ handleClick }) {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    formData1.append("fullname", localStorage.getItem("fullname"));
    formData1.append("worked_place", localStorage.getItem("worked_place"));
    formData1.append("phone", localStorage.getItem("phone"));
    formData1.append("email", localStorage.getItem("email"));
    formData1.append("payment_id", localStorage.getItem("payment_id"));
    formData1.append("comment", "");
    formData1.append("support_doc", selectedFile);
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
    <form onSubmit={handleSubmit} className="final-step">
      <div className="cheque-input__wrap">
        <div className="payment-form__input">
          <label htmlFor="check">{t("check")}</label>
          <div className="file-upload">
            <input
              type="file"
              id="check"
              accept="image/jpg, image/png, image/jpeg, .doc, .docx, .zip, .pdf"
              required
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
              }}
            />
            <FiPlus className="plus-icon" />
          </div>
        </div>
      </div>
      <p className="add-file__desc">{t("attach")}</p>
      <div className="final-step__controlls">
        <button onClick={() => handleClick("prev")} className="prev-btn">
          <HiOutlineArrowLongLeft className="prev-icon" />
          Back
        </button>
        <button className="prev-btn" type="submit">
          {t("submit")}
        </button>
      </div>
    </form>
  );
}
