import {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import axios from "axios";

// context
import {LoaderContext} from "../../../context/LoaderContext";
import {AlertContext} from "../../../context/AlertContext";

//icon
import {FiPlus} from "react-icons/fi";
import {HiOutlineArrowLongLeft} from "react-icons/hi2";

// SCSS
import "./UploadFile.scss";

//BASE_URL
const BASE_URL = "https://conference.kiut.uz/api";

export default function UploadFile({handleClick}) {
    const {t} = useTranslation();
    const {setIsLoading} = useContext(LoaderContext);
    const {setPaymentStatus} = useContext(AlertContext);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData1 = new FormData();

        if (localStorage.getItem("isNamangan") === "1") {
            formData1.append("conference", "namangan")
        } else {
            formData1.append("conference", "tashkent")
        }

        formData1.append("fullname", localStorage.getItem("fullname"));
        formData1.append("worked_place", localStorage.getItem("worked_place"));
        formData1.append("phone", localStorage.getItem("phone"));
        formData1.append("email", localStorage.getItem("email"));
        // formData1.append("payment_id", localStorage.getItem("payment_id") || null);
        formData1.append("comment", "");
        formData1.append("support_doc", selectedFile);
        formData1.append("conference_section", localStorage.getItem("conference"));
        // formData1.append("payment_amount", localStorage.getItem("bill") || 0);

        try {
            setIsLoading(true);
            const RESPONSE = await axios.post(
                `${BASE_URL}/apps/participant/create/`,
                formData1
            );
            if (RESPONSE) {
                setIsLoading(false);
                setPaymentStatus(RESPONSE.status);
            }
        } catch (err) {
            setIsLoading(false);
            setPaymentStatus(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="final-step">
            <div className="cheque-input__wrap">
                <div className="payment-form__input">
                    <label htmlFor="add_article">{t("add_article")}</label>
                    <div className="file-upload">
                        <input
                            type="file"
                            id="add_article"
                            accept="image/jpg, image/png, image/jpeg, .doc, .docx, .zip, .pdf"
                            required
                            onChange={(e) => {
                                setSelectedFile(e.target.files[0]);
                            }}
                        />
                        <FiPlus className="plus-icon"/>
                    </div>
                </div>
            </div>
            <p className="add-file__desc">{t("attach")}</p>
            <div className="final-step__controlls">
                <button onClick={() => handleClick("prev")} className="prev-btn">
                    <HiOutlineArrowLongLeft className="prev-icon"/>
                    {t("back")}
                </button>
                <button className="prev-btn" type="submit">
                    {t("submit")}
                </button>
            </div>
        </form>
    );
}
