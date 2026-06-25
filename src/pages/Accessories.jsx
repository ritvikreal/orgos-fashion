import { useState, useContext } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/accessories.css";

import accessoriesProducts from "../data/accessoriesProducts";

import hero from "../assets/images/accessories/hero.jpg";

import { CartContext } from "../context/CartContext";

function Accessories() {

  const [category, setCategory] =
    useState("all");

  const { addToCart } =
    useContext(CartContext);

  let products = [];

  if (category === "all") {

    products =
      Object.values(accessoriesProducts).flat();

  }

  else {

    products =
      accessoriesProducts[category] || [];

  }

  return (

    <>

      <Navbar />

      {/* HERO */}

      <section className="accessories-hero">

        <img
          src={hero}
          alt=""
          className="hero-banner"
        />

      </section>

      {/* CATEGORY */}

      <section className="accessories-categories">

        <div
          className={
            category === "all"
              ? "acc-cat active"
              : "acc-cat"
          }
          onClick={() => setCategory("all")}
        >
          All Accessories
        </div>

        <div
          className={
            category === "bags"
              ? "acc-cat active"
              : "acc-cat"
          }
          onClick={() => setCategory("bags")}
        >
          Bags
        </div>

        <div
          className={
            category === "watches"
              ? "acc-cat active"
              : "acc-cat"
          }
          onClick={() => setCategory("watches")}
        >
          Watches
        </div>

        <div
          className={
            category === "sunglasses"
              ? "acc-cat active"
              : "acc-cat"
          }
          onClick={() => setCategory("sunglasses")}
        >
          Sunglasses
        </div>

        <div
          className={
            category === "jewellery"
              ? "acc-cat active"
              : "acc-cat"
          }
          onClick={() => setCategory("jewellery")}
        >
          Jewellery
        </div>

        <div
          className={
            category === "wallets"
              ? "acc-cat active"
              : "acc-cat"
          }
          onClick={() => setCategory("wallets")}
        >
          Wallets
        </div>

        <div
          className={
            category === "caps"
              ? "acc-cat active"
              : "acc-cat"
          }
          onClick={() => setCategory("caps")}
        >
          Caps
        </div>

        <div
          className={
            category === "perfumes"
              ? "acc-cat active"
              : "acc-cat"
          }
          onClick={() => setCategory("perfumes")}
        >
          Perfumes
        </div>

      </section>

      {/* PRODUCTS */}

      <section className="accessories-products">

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

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.brand}
                </p>

                <div className="price-row">

                  <span className="new-price">
                    ₹{item.price}
                  </span>

                  <del>
                    ₹{item.oldPrice}
                  </del>

                  <span className="discount">
                    -{item.discount}%
                  </span>

                </div>

                <button
                  onClick={() => addToCart(item)}
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

export default Accessories;