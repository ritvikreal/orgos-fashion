import "../styles/footer.css";
import logo from "../assets/images/logo.png";

function Footer() {
return (

<footer className="footer">

  <div className="footer-container">

    {/* LEFT */}

    <div className="footer-left">

      <img src={logo} alt="" className="footer-logo" />

      <p>
        Elevating your style with premium
        fashion and timeless designs.
        We believe in quality,
        sustainability, and the art of
        dressing well.
      </p>

      <h2>ORGOS</h2>

    </div>

    {/* COMPANY */}

    <div className="footer-column">

      <h3>Company</h3>

      <ul>
        <li>home</li>
        <li>shop</li>
        <li>about us</li>
        <li>contact us</li>
        <li>blog</li>
      </ul>

    </div>

    {/* CATEGORIES */}

    <div className="footer-column">

      <h3>Categories</h3>

      <ul>
        <li>Women's Collection</li>
        <li>Men's Collection</li>
        <li>Accessories</li>
        <li>new arrivals</li>
        <li>sale</li>
      </ul>

    </div>

    {/* CONTACT */}

    <div className="footer-column">

      <h3>Contact info</h3>

      <ul>
        <li>IT park nagpur</li>
        <li>+0123-4567-789</li>
        <li>orgos@gmail.com</li>
      </ul>

    </div>

  </div>

  <div className="copyright">
    Copyright @2026 ORGOS pvt Ltd.
    All Rights Reserved.
  </div>

</footer>

);
}

export default Footer;
