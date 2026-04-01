import React, { useEffect, useState } from "react";
import axios from "axios";
import { MessageCircleMore } from "lucide-react";
// import "./Namkeens.css";
import Topbar from "../components/Topbar";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/Whatsapp";

const Namkeens = () => {
  const [namkeens, setNamkeens] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:4000/productss"; 
  // replace with your correct local IP if needed

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const filtered = res.data.filter(
          (item) => item.category === "Namkeens"
        );
        setNamkeens(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching namkeens:", err);
        setLoading(false);
      });
  }, []);

  const phoneNumber = "916300692846";

  const handleClick = (productName) => {
    const message = `Hello, I want to know more about ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
    <Topbar/>
    <Navbar/>
    <section className="namkeens-section">
      <div className="container">
        <div className="namkeens-header">
          <h2>Our Namkeens</h2>
          <p>
            Explore our crunchy, spicy, and handcrafted namkeen collection made
            with authentic flavors.
          </p>
        </div>

        {loading ? (
          <p className="loading-text">Loading Namkeens...</p>
        ) : namkeens.length === 0 ? (
          <p className="loading-text">No Namkeens found.</p>
        ) : (
          <div className="namkeens-grid">
            {namkeens.map((item) => (
              <div className="namkeen-card" key={item.id}>
                <div className="namkeen-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="namkeen-content">
                  <h3 className="product-title">{item.name}</h3>
                  <p className="product-description">{item.description}</p>

                  <div className="namkeen-bottom">
                    <div className="price-box">
                      <span className="base-price">₹{item.base_price}</span>
                      <span className="discount-price">
                        ₹{item.discount_price}
                      </span>
                    </div>

                    <button
                      className="cart-btn"
                      onClick={() => handleClick(item.name)}
                    >
                      <MessageCircleMore size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
    <Footer/>
    <WhatsAppButton/>
    </>
  );
};

export default Namkeens;