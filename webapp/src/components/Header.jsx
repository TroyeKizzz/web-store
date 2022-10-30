import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import "./styles/Header.css";
import { userService } from "../firebase-config";

const Header = () => {
  const user = useUser();
  return (
    <div className="Header-div">
      <div className="Header-links-div">
        <div className="Header-link-div">
          <Link to="/" className="Header-link">
            Home
          </Link>
        </div>
      </div>
      {user && (
        <div className="Header-links-div">
          <div className="Header-link-div">
            <p className="Header-link">{user?.displayName || "Username"}</p>
          </div>
          <div className="Header-link-div">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={() => userService.logout()} className="Header-link">
              Logout
            </a>
          </div>
        </div>
      )}
      {!user && (
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
      )}
    </div>
  );
};

export default Header;
