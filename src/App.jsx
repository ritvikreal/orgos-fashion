import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Account from "./pages/Account";

function App() {

return (

<BrowserRouter>

  <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/login" element={<Login />} />

    <Route path="/otp" element={<Otp />} />

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
