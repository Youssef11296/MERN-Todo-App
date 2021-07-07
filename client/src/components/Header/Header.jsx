// Hooks
import { Link } from "react-router-dom";
// Styles
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="logo">
          <Link to="/">Logo</Link>
        </h1>
      </div>
      <div className="header__right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Log out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
