import React, { useEffect, useState } from "react";
import axios from "axios";
import { MessageCircleMore } from "lucide-react";
// import "./Specialities.css";

const Specialities = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Sweets");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching specialities:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(
    (item) => item.category === activeCategory
  );

  const phoneNumber = "916300692846";

  const handleClick = (productName) => {
    const message = `Hello, I want to know more about ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="specialities-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Specialities</h2>
          <p>
            Explore our delicious handcrafted favorites made with authentic taste.
          </p>
        </div>

        <div className="category-buttons">
          {["Sweets", "Namkeens", "Pappads", "Pickels", "Powders"].map(
            (category) => (
              <button
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category === "Pappads" ? "Papads" : category}
              </button>
            )
          )}
        </div>

        {loading ? (
          <p className="loading-text">Loading specialities...</p>
        ) : (
          <div className="specialities-grid">
            {filteredProducts.map((item) => (
              <div className="speciality-card" key={item.id}>
                <div className="speciality-image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="speciality-content">
                  <h3 className="product-title">{item.name}</h3>

                  <div className="speciality-bottom">
                    <div className="price-box">
                      <span className="base-price">₹{item.base_price}</span>
                      <span className="discount-price">₹{item.discount_price}</span>
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
  );
};

export default Specialities;