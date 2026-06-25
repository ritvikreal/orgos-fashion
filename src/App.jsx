import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Account from "./pages/Account";
import Shop from "./pages/Shop";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import Profile from "./pages/Profile";




function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/otp" element={<Otp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/profile" element={<Profile />} />


        {/* ACCOUNT PAGE */}

        <Route
          path="/account"
          element={<Account />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
