import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/shop.css";

import shop1 from "../assets/images/shop2.png";
import shop2 from "../assets/images/shop3.png";
import shop3 from "../assets/images/shop4.png";
import shop4 from "../assets/images/shop5.png";
import shop5 from "../assets/images/shop6.png";
import shop6 from "../assets/images/shop7.png";

function Shop() {

  const shops = [
    {
      image: shop1,
      name: "Trendy Collection",
      category: "Ethnic Wear • Western Wear",
      location: "Sitabuldi, Nagpur",
      distance: "2.1 km"
    },
    {
      image: shop2,
      name: "Style Hub",
      category: "Men's Wear • Formal Wear",
      location: "Dharampeth, Nagpur",
      distance: "1.8 km"
    },
    {
      image: shop3,
      name: "Nagpur Fashion",
      category: "Ethnic Wear • Saree",
      location: "IT Park, Nagpur",
      distance: "3.3 km"
    },
    {
      image: shop4,
      name: "B&W",
      category: "Unisex Wear • Streetwear",
      location: "Civil Line, Nagpur",
      distance: "2.6 km"
    },
    {
      image: shop5,
      name: "Kids World",
      category: "Kids Wear • Boys Wear",
      location: "Manewada, Nagpur",
      distance: "3.7 km"
    },
    {
      image: shop6,
      name: "Fab Outfit",
      category: "Accessories • Bags",
      location: "Sadar, Nagpur",
      distance: "2.6 km"
    }
  ];

  return (
    <>
      <Navbar />

      <section className="shop-banner">
        <h1>OUR SHOPS</h1>
        <p>Explore our top garment shops near you.</p>
      </section>

      <section className="shop-container">

        <div className="shop-header">
          <h2>Top Shop</h2>

          <div className="sort-box">
            <span>Sort by:</span>

            <select>
              <option>Popular</option>
              <option>Nearest</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="shop-grid">

          {shops.map((shop,index)=>(
            <div className="shop-card" key={index}>

              <img
                src={shop.image}
                alt=""
                className="shop-image"
              />

              <div className="shop-content">

                <h3>
                  {shop.name}
                  <span className="verified">✔</span>
                </h3>

                <p className="category">
                  {shop.category}
                </p>

                <p className="location">
                  📍 {shop.location}
                  <span>{shop.distance}</span>
                </p>

                <div className="shop-buttons">
                  <button className="view-btn">
                    View Shop
                  </button>

                  <button className="visit-btn">
                    Visit Shop
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Shop;