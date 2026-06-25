import "../styles/hero.css";

import girl from "../assets/images/girl.png";

function HeroSection() {

  return (

    <section className="hero-wrapper">

      {/* REWARD BAR */}

      <div className="reward-bar">

        {/* BOX 1 */}

        <div className="reward-box">

          <div className="reward-icon">
            ⭐
          </div>

          <div className="reward-text">

            <h3>Reward points</h3>

            <p>
              <span>1250</span> pts
            </p>

          </div>

        </div>

        {/* BOX 2 */}

        <div className="reward-box">

          <div className="reward-icon">
            🏆
          </div>

          <div className="reward-text member-content">

            <h3>Silver Member</h3>

            <p>80% to Gold</p>

            <div className="progress-bar">

              <div className="progress-fill"></div>

            </div>

          </div>

        </div>

        {/* BOX 3 */}

        <div className="reward-box">

          <div className="reward-icon">
            🎁
          </div>

          <div className="reward-text">

            <h3>Silver Member</h3>

            <p>
              <span>250</span> Pts to go
            </p>

          </div>

        </div>

        {/* BUTTON */}

        <button className="reward-btn">

          My Rewards

        </button>

      </div>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Complete Your
            <br />
            Look With Orgos
          </h1>

          <p>
            Premium fashion collection
            with modern style.
          </p>

          <button>
            Explore Shop
          </button>

        </div>

        <div className="hero-right">

          <img src={girl} alt="" />

        </div>

      </section>

    </section>

  );
}

export default HeroSection;