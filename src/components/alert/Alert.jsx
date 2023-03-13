import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useSearchParams} from "react-router-dom";
//icons
import errorIcon from "../../assets/ui-icons/error.svg";
import successIcon from "../../assets/ui-icons/success.svg";

// SCSS
import "./Alert.scss";

export default function Alert({paymentStatus, setPaymentStatus}) {
    const {t} = useTranslation();
    const [resMessage, setResMessage] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        if (paymentStatus === 201) {
            setResMessage(t("success_message"));
        } else {
            setResMessage(t("error_message"));
        }
    }, [paymentStatus, t]);
    console.log(paymentStatus);

    const handleClick = () => {
        if (paymentStatus === 201) {
            localStorage.clear();
            searchParams.delete('payment_status')
            searchParams.delete('payment_id')
            setSearchParams(searchParams);
            window.location.reload();
        }
        setPaymentStatus(null);
    };

    return (
        <div className={`alert ${paymentStatus ? "active" : ""}`}>
            <h5 className="alert-title line">{resMessage}</h5>
            <img
                className="alert-icon"
                src={paymentStatus === 201 ? successIcon : errorIcon}
                alt=""
            />
            <strong
                style={
                    paymentStatus === 201 ? {color: "#27ae60"} : {color: "#f21e1e"}
                }
                className="alert-message"
            >
                {paymentStatus === 201 ? "Success" : `${t("error")}`}
            </strong>
            <button onClick={handleClick} className="alert-btn">
                {paymentStatus === 201 ? "OK" : `${t("try_again")}`}
            </button>
        </div>
    );
}
