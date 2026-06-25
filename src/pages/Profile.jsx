import "../styles/profile.css";

import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  const logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("name");
    localStorage.removeItem("mobile");

    navigate("/");

  };

  return (

    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">

          {
            user?.name?.charAt(0)
          }

        </div>

        <h1>
          Welcome {user?.name}
        </h1>

        <p>
          Mobile:
          {" "}
          {user?.mobile}
        </p>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>

  );
}

export default Profile;