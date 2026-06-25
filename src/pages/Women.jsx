import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/women.css";

import womenProducts from "../data/womenProducts";

function Women() {

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  let products = [];

  if (selectedCategory === "all") {

    products = Object.values(womenProducts).flat();

  } else {

    products = womenProducts[selectedCategory] || [];

  }

  return (

    <>

      <Navbar />

      {/* HERO SECTION */}

      <section className="women-hero">

        <div className="women-hero-left">

          <p className="arrival">
            NEW ARRIVALS
          </p>

          <h1>
            WOMAN'S
            <br />
            COLLECTION
          </h1>

          <h3>
            POWER. ELEGANCE.
            UNAPOLOGETICALLY YOU.
          </h3>

          <p className="hero-desc">
            Designed for the woman
            who leads, inspires,
            and owns every moment.
          </p>

          <button>
            SHOP NOW
          </button>

        </div>

        <div className="women-hero-right">
        </div>

      </section>

      {/* CATEGORYS */}

      <section className="category-section">

        <div
          className={
            selectedCategory === "all"
              ? "category active"
              : "category"
          }
          onClick={() =>
            setSelectedCategory("all")
          }
        >
          All
        </div>

        <div
          className={
            selectedCategory === "dresses"
              ? "category active"
              : "category"
          }
          onClick={() =>
            setSelectedCategory("dresses")
          }
        >
          Dresses
        </div>

        <div
          className={
            selectedCategory === "bottomwear"
              ? "category active"
              : "category"
          }
          onClick={() =>
            setSelectedCategory("bottomwear")
          }
        >
          Bottom Wear
        </div>

        <div
          className={
            selectedCategory === "coord"
              ? "category active"
              : "category"
          }
          onClick={() =>
            setSelectedCategory("coord")
          }
        >
          Co-Ord Sets
        </div>

        <div
          className={
            selectedCategory === "outerwear"
              ? "category active"
              : "category"
          }
          onClick={() =>
            setSelectedCategory("outerwear")
          }
        >
          Outerwear
        </div>

        <div
          className={
            selectedCategory === "ethnic"
              ? "category active"
              : "category"
          }
          onClick={() =>
            setSelectedCategory("ethnic")
          }
        >
          Ethnic Wear
        </div>

        <div
          className={
            selectedCategory === "tops"
              ? "category active"
              : "category"
          }
          onClick={() =>
            setSelectedCategory("tops")
          }
        >
          Tops & T-Shirts
        </div>

      </section>

      {/* PRODUCTS */}

      <section className="women-products">

        <div className="products-grid">

          {products.map((item) => (

            <div
              className="product-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>
                {item.name}
              </h3>

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

              <button className="cart-btn">
                Add To Cart
              </button>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </>

  );
}

export default Women;