// tools
import { Link, NavLink } from "react-router-dom";
// Images
import logo from "../../assets/logo/KiutLogo.svg";
// SCSS
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="Site logo" />
          </Link>
        </div>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__link active" : "nav__link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav__link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav__link" to="/conference">
                Conference
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="join-conference">
          <Link className="join-conference__link">Join to conference</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
