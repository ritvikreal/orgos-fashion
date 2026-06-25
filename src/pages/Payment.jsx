import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/payment.css";

import { CartContext } from "../context/CartContext";

function Payment() {

  const navigate = useNavigate();

  const {
    cartItems,
    getTotal,
    clearCart
  } = useContext(CartContext);

  const [method, setMethod] = useState("upi");

  const [upiId, setUpiId] = useState("");

  const [cardNumber, setCardNumber] = useState("");

  const [holderName, setHolderName] = useState("");

  const [expiry, setExpiry] = useState("");

  const [cvv, setCvv] = useState("");



  const placeOrder = () => {

    if (cartItems.length === 0) {

      alert("Your cart is empty.");

      return;

    }



    if (method === "upi") {

      if (upiId === "") {

        alert("Enter UPI ID");

        return;

      }

    }



    if (method === "card") {

      if (

        cardNumber === "" ||

        holderName === "" ||

        expiry === "" ||

        cvv === ""

      ) {

        alert("Fill all card details");

        return;

      }

    }



    clearCart();

    localStorage.removeItem("cart");

    navigate("/success");

  };



  return (

    <>

      <Navbar />



      <div className="payment-page">

        <h1>Payment</h1>



        <div className="payment-container">

          {/* LEFT */}

          <div className="payment-left">

            <h2>Select Payment Method</h2>



            <label className="radio-box">

              <input

                type="radio"

                checked={method === "upi"}

                onChange={() => setMethod("upi")}

              />

              UPI

            </label>



            <label className="radio-box">

              <input

                type="radio"

                checked={method === "card"}

                onChange={() => setMethod("card")}

              />

              Credit / Debit Card

            </label>



            <label className="radio-box">

              <input

                type="radio"

                checked={method === "cod"}

                onChange={() => setMethod("cod")}

              />

              Cash On Delivery

            </label>



            {/* UPI */}



            {

              method === "upi" && (

                <div className="payment-form">

                  <input

                    type="text"

                    placeholder="Enter UPI ID"

                    value={upiId}

                    onChange={(e) =>

                      setUpiId(e.target.value)

                    }

                  />

                </div>

              )

            }



            {/* CARD */}



            {

              method === "card" && (

                <div className="payment-form">

                  <input

                    type="text"

                    placeholder="Card Number"

                    value={cardNumber}

                    onChange={(e) =>

                      setCardNumber(e.target.value)

                    }

                  />



                  <input

                    type="text"

                    placeholder="Card Holder Name"

                    value={holderName}

                    onChange={(e) =>

                      setHolderName(e.target.value)

                    }

                  />



                  <div className="card-row">

                    <input

                      type="text"

                      placeholder="MM/YY"

                      value={expiry}

                      onChange={(e) =>

                        setExpiry(e.target.value)

                      }

                    />



                    <input

                      type="password"

                      placeholder="CVV"

                      value={cvv}

                      onChange={(e) =>

                        setCvv(e.target.value)

                      }

                    />

                  </div>

                </div>

              )

            }



            {/* COD */}



            {

              method === "cod" && (

                <div className="cod-box">

                  <p>

                    Cash will be collected at the time of delivery.

                  </p>

                </div>

              )

            }



          </div>



          {/* RIGHT */}



          <div className="payment-right">

            <h2>Order Summary</h2>



            {

              cartItems.map((item) => (

                <div

                  className="summary-item"

                  key={item.id}

                >

                  <span>

                    {item.name}

                    ×

                    {item.quantity}

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

              <span>Product Total</span>

              <span>

                ₹{getTotal()}

              </span>

            </div>



            <div className="summary-item">

              <span>Delivery</span>

              <span>

                ₹50

              </span>

            </div>



            <div className="summary-item">

              <span>GST</span>

              <span>

                ₹{Math.round(getTotal() * 0.18)}

              </span>

            </div>



            <hr />



            <div className="summary-item total">

              <strong>

                Grand Total

              </strong>



              <strong>

                ₹

                {

                  getTotal()

                  + 50

                  + Math.round(getTotal() * 0.18)

                }

              </strong>

            </div>



            <button

              className="place-order"

              onClick={placeOrder}

            >

              PLACE ORDER

            </button>

          </div>

        </div>

      </div>



      <Footer />

    </>

  );

}

export default Payment;