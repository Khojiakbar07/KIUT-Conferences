import { useRef, useState } from "react";
import "./LoginModal.scss";

const LoginModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const possibleError = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      setIsLogged(true);
    }
    possibleError.current.textContent = "* Incorrect username or password";
  };

  return (
    <div
      style={isLogged ? { display: "none" } : { display: "flex" }}
      className="login-modal"
    >
      <div className="login-modal__card">
        <form onSubmit={handleSubmit} className="login-modal__form">
          <div className="login-modal__input-wrap">
            <label htmlFor="admin-username">Username:</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              id="admin-username"
              type="text"
            />
          </div>
          <div className="login-modal__input-wrap">
            <label htmlFor="admin-password">Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className=""
              id="admin-password"
              type="password"
            />
          </div>
          <button className="login-modal__submit-btn">Submit</button>
          <p className="login-modal__error-msg" ref={possibleError}></p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
