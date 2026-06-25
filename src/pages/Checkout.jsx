import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/checkout.css";

import { CartContext } from "../context/CartContext";

function Checkout() {

  const navigate = useNavigate();

  const { cartItems, getTotal } =
    useContext(CartContext);

  return (

    <>

      <Navbar />

      <div className="checkout-page">

        <h1>Checkout</h1>

        <div className="checkout-container">

          {/* LEFT */}

          <div className="address-box">

            <h2>Shipping Address</h2>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="text"
              placeholder="Mobile Number"
            />

            <textarea
              placeholder="Full Address"
            ></textarea>

            <input
              type="text"
              placeholder="City"
            />

            <input
              type="text"
              placeholder="State"
            />

            <input
              type="text"
              placeholder="Pincode"
            />

          </div>

          {/* RIGHT */}

          <div className="summary-box">

            <h2>Order Summary</h2>

            {

              cartItems.map(item => (

                <div
                  className="summary-item"
                  key={item.id}
                >

                  <span>

                    {item.name}

                    × {item.quantity}

                  </span>

                  <span>

                    ₹

                    {item.price * item.quantity}

                  </span>

                </div>

              ))

            }

            <hr />

            <div className="summary-item">

              <b>Total</b>

              <b>

                ₹{getTotal()}

              </b>

            </div>

            <button

              className="payment-btn"

              onClick={() =>

                navigate("/payment")

              }

            >

              Continue To Payment

            </button>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}

export default Checkout;