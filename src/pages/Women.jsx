import { useState, useContext } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hero from "../assets/images/women/hero.jpg";

import "../styles/women.css";

import womenProducts from "../data/womenProducts";

import { CartContext } from "../context/CartContext";

function Women() {

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const { addToCart } =
    useContext(CartContext);

  let products = [];

  if (selectedCategory === "all") {

    products = Object.values(womenProducts).flat();

  }

  else {

    products = womenProducts[selectedCategory] || [];

  }

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section className="women-hero">

        <img
          src={hero}
          alt="Women's Collection"
          className="women-banner"
        />

      </section>

      {/* CATEGORY */}

      <section className="category-section">

        <div
          className={
            selectedCategory === "all"
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory("all")}
        >
          All
        </div>

        <div
          className={
            selectedCategory === "dresses"
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory("dresses")}
        >
          Dresses
        </div>

        <div
          className={
            selectedCategory === "bottomwear"
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory("bottomwear")}
        >
          Bottom Wear
        </div>

        <div
          className={
            selectedCategory === "coord"
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory("coord")}
        >
          Co-Ord Sets
        </div>

        <div
          className={
            selectedCategory === "outerwear"
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory("outerwear")}
        >
          Outerwear
        </div>

        <div
          className={
            selectedCategory === "ethnic"
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory("ethnic")}
        >
          Ethnic Wear
        </div>

        <div
          className={
            selectedCategory === "tops"
              ? "category active"
              : "category"
          }
          onClick={() => setSelectedCategory("tops")}
        >
          Tops & T-Shirts
        </div>

      </section>

      {/* PRODUCTS */}

      <section className="women-products">

        <div className="products-grid">

          {

            products.map((item) => (

              <div
                className="product-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h3>{item.name}</h3>

                <p className="brand">
                  Eyestyle Bombay
                </p>

                <div className="rating">
                  ⭐ {item.rating}
                </div>

                <div className="price-row">

                  <span className="new-price">
                    ₹{item.price}
                  </span>

                  <del>
                    ₹{item.oldPrice}
                  </del>

                  <span className="discount">
                    -38%
                  </span>

                </div>

              <button
  className="cart-btn"
  onClick={() => {

    console.log("Clicked");

    console.log(item);

    addToCart(item);

  }}
>
  Add To Cart
</button>

              </div>

            ))

          }

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Women;