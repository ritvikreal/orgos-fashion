import "../styles/account.css";

import loginBanner from "../assets/images/login-banner.png";

import { useNavigate } from "react-router-dom";

function Account() {

const navigate = useNavigate();

return (

<div className="account-page">

  <div className="login-box">

    {/* TOP IMAGE */}

    <img
      src={loginBanner}
      alt=""
      className="login-banner"
    />

    {/* FORM */}

    <div className="login-content">

      <h2>
        Login or Sign up
      </h2>

      <input
        type="text"
        placeholder="+91 | Mobile Number"
      />

      <div className="checkbox-area">

        <input type="checkbox" />

        <p>
          By continuing ,I agree to the
          <span> Terms of Use </span>
          &
          <span> Privacy Policy </span>
          and I am above !* years old
        </p>

      </div>

      <button
        onClick={() => navigate("/otp")}
      >
        CONTINUE
      </button>

    </div>

  </div>

</div>

);
}

export default Account;
