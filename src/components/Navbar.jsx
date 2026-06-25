import "../styles/navbar.css";
<<<<<<< HEAD
import logo from "../assets/images/logo.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
=======

import logo from "../assets/images/logo.png";

import { useState } from "react";
>>>>>>> f739f31dc7b0aa863c50e62adea9015586f64937

import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

<<<<<<< HEAD
function Navbar() {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const user =
    JSON.parse(localStorage.getItem("user"));

  return (

    <nav className="navbar">

      {/* LOGO */}

      <div
        className="navbar-logo"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="" />
      </div>

      {/* MOBILE MENU */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <HiMenuAlt3 />
      </div>

      {/* NAV LINKS */}

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

      </ul>

      {/* ICONS */}

      <div className="nav-icons">

        <FiSearch />

        <AiOutlineHeart />

        <HiOutlineShoppingBag />

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
            className="user-icon"
            onClick={() => navigate("/account")}
          />
        }

      </div>

    </nav>

  );
}

export default Navbar;
=======
import { useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();

const [menuOpen, setMenuOpen] = useState(false);

return (

<nav className="navbar">

  {/* LOGO */}

  <div className="navbar-logo">

    <img src={logo} alt="" />
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
>>>>>>> f739f31dc7b0aa863c50e62adea9015586f64937
