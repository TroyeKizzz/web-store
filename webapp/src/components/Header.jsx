import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="Header-div">
      <div className="Header-links-div">
        <div className="Header-link-div">
          <Link to="/" className="Header-link">
            Home
          </Link>
        </div>
      </div>

      <div className="Header-links-div">
        <div className="Header-link-div">
          <Link to="/login" className="Header-link">
            Login
          </Link>
        </div>
        <div className="Header-link-div">
          <Link to="/register" className="Header-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
