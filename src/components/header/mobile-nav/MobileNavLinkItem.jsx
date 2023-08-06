import { NavLink } from "react-router-dom";

const MobileNavLinkItem = ({ link, name }) => {
  return (
    <li>
      <NavLink className="mobile-nav__list-link" to={link}>
        {name}
      </NavLink>
    </li>
  );
};

export default MobileNavLinkItem;
