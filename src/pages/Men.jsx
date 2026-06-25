import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/men.css";

import menProducts from "../data/menProducts";

import hero from "../assets/images/men/hero.jpg";

function Men() {

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  let products = [];

  if (selectedCategory === "all") {
    products = Object.values(menProducts).flat();
  } else {
    products = menProducts[selectedCategory];
  }

  return (
    <>
      <Navbar />

      {/* HERO IMAGE */}

      <section className="men-hero">

        <img
          src={hero}
          alt="Men Collection"
          className="hero-banner"
        />

      </section>

      {/* CATEGORYS */}

      <section className="men-categories">

        <div
          className={
            selectedCategory === "all"
              ? "cat active"
              : "cat"
          }
          onClick={() => setSelectedCategory("all")}
        >
          All
        </div>

        <div
          className={
            selectedCategory === "formal"
              ? "cat active"
              : "cat"
          }
          onClick={() => setSelectedCategory("formal")}
        >
          Formal Wear
        </div>

        <div
          className={
            selectedCategory === "activewear"
              ? "cat active"
              : "cat"
          }
          onClick={() => setSelectedCategory("activewear")}
        >
          Activewear
        </div>

        <div
          className={
            selectedCategory === "premium"
              ? "cat active"
              : "cat"
          }
          onClick={() => setSelectedCategory("premium")}
        >
          Premium
        </div>

        <div
          className={
            selectedCategory === "party"
              ? "cat active"
              : "cat"
          }
          onClick={() => setSelectedCategory("party")}
        >
          Party Wear
        </div>

      </section>

      {/* PRODUCTS */}

      <section className="men-products">

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

              <h3>{item.name}</h3>

              <p>
                Cotton Blend • Slim Fit
              </p>

              <span className="price">
                ₹{item.price}
              </span>

              <button>
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

export default Men;