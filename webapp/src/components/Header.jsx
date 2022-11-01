import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import "./styles/Header.css";
import { userService } from "../firebase-config";
import useCart from "../hooks/useCart";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";

const Header = () => {
  const user = useUser();
  const [cart, { getCartLength }] = useCart();
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const goToOrder = () => {
    if (cart?.length > 0) navigate("/order");
  };

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
            <Button
              variant="outlined"
              style={{
                backgroundColor: "#ffffff",
                color: "#1e81b0",
              }}
              onClick={goToOrder}
            >
              Cart
              {getCartLength() > 0 && (
                <div className="Header-div-cart-length">{getCartLength()}</div>
              )}
            </Button>
          </div>
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
