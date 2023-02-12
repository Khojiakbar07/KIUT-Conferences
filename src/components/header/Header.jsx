
// Images
import logo from '../../assets/logo/KiutLogo.svg';
// SCSS
import "./Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="Site logo" />
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              
            </li>
          </ul>
        </nav>  
      </div>
    </header>
  )
}

export default Header