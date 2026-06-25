import "../styles/navbar.css";
import logo from "../assets/images/logo.png";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

import { CartContext } from "../context/CartContext";

function Navbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useContext(CartContext);

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <nav className="navbar">

      {/* LOGO */}

      <div
        className="navbar-logo"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Logo" />
      </div>

      {/* MOBILE MENU */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HiMenuAlt3 />
      </div>

      {/* LINKS */}

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li onClick={() => navigate("/")}>
          Home
        </li>

        <li onClick={() => navigate("/shop")}>
          Shop
        </li>

        <li onClick={() => navigate("/women")}>
          Women
        </li>

        <li onClick={() => navigate("/men")}>
          Men
        </li>

        <li onClick={() => navigate("/accessories")}>
          Accessories
        </li>

        <li onClick={() => navigate("/about")}>
          About Us
        </li>

        <li onClick={() => navigate("/contact")}>
          Contact Us
        </li>

        <li onClick={() => navigate("/blog")}>
          Blog
        </li>

        <li onClick={() => navigate("/smart-feature")}>
          Smart Feature
        </li>

      </ul>

      {/* ICONS */}

      <div className="nav-icons">

        <FiSearch className="nav-icon" />

        <AiOutlineHeart className="nav-icon" />

        <div
          className="cart-icon"
          onClick={() => navigate("/cart")}
        >

          <HiOutlineShoppingBag className="nav-icon" />

          <span className="cart-count">

            {cartItems.length}

          </span>

        </div>

        {

          user ?

          <div
            className="user-name"
            onClick={() => navigate("/profile")}
          >

            Welcome {user.name}

          </div>

          :

          <FiUser
            className="nav-icon user-icon"
            onClick={() => navigate("/account")}
          />

        }

      </div>

    </nav>

  );

}

export default Navbar;