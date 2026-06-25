import "../styles/home.css";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

import rectangle1 from "../assets/images/Rectangle.png";
import rectangle2 from "../assets/images/Rectangle2.png";
import rectangle3 from "../assets/images/Rectangle3.png";
import rectangle4 from "../assets/images/Rectangle4.png";
import rectangle5 from "../assets/images/Rectangle5.png";
import rectangle6 from "../assets/images/Rectangle6.png";
import rectangle7 from "../assets/images/Rectangle7.png";
import rectangle8 from "../assets/images/Rectangle8.png";

import couple1 from "../assets/images/couple1.png";
import couple2 from "../assets/images/couple2.png";
import couple3 from "../assets/images/couple3.png";

import watch from "../assets/images/watch.png";

function Home() {

  const spinWheel = () => {

    const wheel = document.querySelector(".wheel");

    let randomDegree =
      Math.floor(3000 + Math.random() * 2000);

    wheel.style.transform =
      `rotate(${randomDegree}deg)`;

  };

  return (

    <div>

      <Navbar />

      <HeroSection />

      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">

          <div className="icon-circle">
            🚚
          </div>

          <h2>Complimentary Shipping</h2>

          <p>
            Enjoy free standard shipping on
            all orders over ₹150.
          </p>

        </div>

        <div className="feature-card">

          <div className="icon-circle">
            🛡️
          </div>

          <h2>Secure Transactions</h2>

          <p>
            Your security is our priority.
            All payments are encrypted.
          </p>

        </div>

        <div className="feature-card">

          <div className="icon-circle">
            🎧
          </div>

          <h2>Dedicated Concierge</h2>

          <p>
            Our support team is available
            24/7 to assist you.
          </p>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="products">

        <h2>Our Top Seller Products</h2>

        <div className="product-grid">

          <div className="card">
            <img src={rectangle1} alt="" />
            <p>Brown peakcock kurta</p>
          </div>

          <div className="card">
            <img src={rectangle2} alt="" />
            <p>Classic hank t shirt</p>
          </div>

          <div className="card">
            <img src={rectangle3} alt="" />
            <p>Cream flower Frock</p>
          </div>

          <div className="card">
            <img src={rectangle4} alt="" />
            <p>Yellow party wear</p>
          </div>

          <div className="card">
            <img src={rectangle5} alt="" />
            <p>Pack of 5 cotton socks</p>
          </div>

          <div className="card">
            <img src={rectangle6} alt="" />
            <p>Classic Beanie cap</p>
          </div>

          <div className="card">
            <img src={rectangle7} alt="" />
            <p>Gray Hand Bag</p>
          </div>

          <div className="card">
            <img src={rectangle8} alt="" />
            <p>Seiko Aston Black watch</p>
          </div>

        </div>

      </section>

      {/* SPIN SECTION */}

      <section className="spin-section">

        {/* LEFT */}

        <div className="spin-left">

          <h1>
            Crafting Timeless
            <br />
            Elegance Since 2026
          </h1>

          <p>
            We don’t just make
            <br />
            clothes.
            <br />
            We make the ones you
            <br />
            reach for without
            <br />
            thinking.
          </p>

        </div>

        {/* CENTER */}

        <div className="spin-center">

          <div className="wheel">

            <div className="slice slice1">
              <span>15% OFF</span>
            </div>

            <div className="slice slice2">
              <span>50% OFF</span>
            </div>

            <div className="slice slice3">
              <span>FREE RETURN</span>
            </div>

            <div className="slice slice4">
              <span>FREE Tshirt</span>
            </div>

            <div className="slice slice5">
              <span>
                BETTER LUCK
                <br />
                NEXT TIME
              </span>
            </div>

            <div className="slice slice6">
              <span>5% OFF</span>
            </div>

            <div className="slice slice7">
              <span>FREE DELIVERY</span>
            </div>

            <div className="slice slice8">
              <span>20% OFF</span>
            </div>

            <div className="wheel-center">
              SPIN
            </div>

          </div>

          <div className="pointer"></div>

        </div>

        {/* RIGHT */}

        <div className="spin-right">

          <div className="reward-card">

            <h2>
              WIN EXCLUSIVE
              <br />
              <span>GARMENT REWARDS!</span>
            </h2>

            <p>
              Spin the wheel for a chance to win
              exciting discounts, free apparel,
              and special offers on your
              favorite styles!
            </p>

            <button onClick={spinWheel}>
              SPIN NOW
            </button>

          </div>

        </div>

      </section>

      {/* COUPLE SECTION */}

      <section className="couple-section">

        <div className="couple-grid">

          <div className="couple-card">
            <img src={couple1} alt="" />
          </div>

          <div className="couple-card">
            <img src={couple2} alt="" />
          </div>

          <div className="couple-card">
            <img src={couple3} alt="" />
          </div>

        </div>

      </section>

      {/* WEDDING */}

      <section className="wedding">

        <h1>
          Two hearts. One celebration.
          One perfect match.
        </h1>

        <p>
          Our wedding outfits are designed to
          complement each other.
        </p>

        <button>
          EXPLORE NOW
        </button>

      </section>

      {/* WATCH SECTION */}

      <section className="watch-section">

        <div className="watch-left">

          <img src={watch} alt="" />

        </div>

        <div className="watch-right">

          <h1>Distinguished Watch</h1>

          <h2>Limited Edition</h2>

          <p>
            Stylish and crafted for modern fashion.
          </p>

          <button>
            SHOP NOW
          </button>

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default Home;