import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "./ShoppingCartContext";

function Navbar({ userName, loggedIn, setLoggedIn }) {
  const [showCart, setShowCart] = useState(false);
  const [state] = useShoppingCart();

  function toggleShoppingCart() {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  return (
    <>
      <div className="navbar2">
        <Link to="/">
          <FontAwesomeIcon
            icon={faPaw}
            style={{ color: "#ffffff", height: "30px" }}
            className="paw"
          />
        </Link>
        {loggedIn ? (
          <>
            <p className="login">Hello, {userName}!</p>
            <button
              className="logout"
              onClick={() => {
                setLoggedIn(false);
                console.log("logged out: " + loggedIn);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login">
            Login
          </Link>
        )}

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a onClick={toggleShoppingCart} className="adopted">
            Adopted Pets:
          </a>
          <div>{state.count}</div>
        </div>
      </div>
      {showCart && <ShoppingCart></ShoppingCart>}
    </>
  );
}

export default Navbar;
