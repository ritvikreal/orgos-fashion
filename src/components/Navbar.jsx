import "../styles/navbar.css";

import logo from "../assets/images/logo.png";

import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

import { useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();

const [menuOpen, setMenuOpen] = useState(false);

return (

<nav className="navbar">

  {/* LOGO */}

  <div className="navbar-logo">

    <img src={logo} alt="" />

    <h2>ORGOS</h2>

  </div>

  {/* MENU BUTTON */}

  <div
    className="menu-icon"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <HiMenuAlt3 />
  </div>

  {/* NAV LINKS */}

  <ul className={menuOpen ? "nav-links active" : "nav-links"}>

    <li>Home</li>
    <li>Shop</li>
    <li>Women</li>
    <li>Men</li>
    <li>Accessories</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Blog</li>
    <li>Smart Feature</li>

  </ul>

  {/* ICONS */}

  <div className="nav-icons">

    <FiSearch />

    <AiOutlineHeart />

    <HiOutlineShoppingBag />

    <FiUser
      className="user-icon"
      onClick={() => navigate("/account")}
    />

  </div>

</nav>

);
}

export default Navbar;
