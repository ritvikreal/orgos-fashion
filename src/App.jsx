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

import SmartDashboard from "./pages/SmartDashboard";
import AISize from "./pages/AISize";
import FuturePrice from "./pages/FuturePrice";

import CartProvider from "./context/CartContext";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Payment from "./pages/Payment";

import Success from "./pages/Success";

function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/otp" element={<Otp />} />

          <Route path="/account" element={<Account />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/women" element={<Women />} />

          <Route path="/men" element={<Men />} />

          <Route path="/accessories" element={<Accessories />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/profile" element={<Profile />} />



          <Route
            path="/smart-feature"
            element={<SmartDashboard />}
          />

          <Route
            path="/ai-size"
            element={<AISize />}
          />

          <Route
            path="/future-price"
            element={<FuturePrice />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
path="/checkout"
element={<Checkout />}
/>
<Route
path="/payment"
element={<Payment />}
/>

<Route

path="/success"

element={<Success />}

/>


        </Routes>

      </BrowserRouter>

    </CartProvider>

  );

}

export default App;