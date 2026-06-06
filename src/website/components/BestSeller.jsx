import React, { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
// import "./BestSeller.css";
import { API_ENDPOINTS } from "../../api/endpoints";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.bestseller)
      .then((res) => {
        setProducts(res.data); // ✅ direct data
      })
      .catch((err) => console.error(err));
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div className="best-container">
      <h2 className="title">Best Sellers</h2>

      <div className="card-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.name} />

              <span className="badge">Best Seller</span>
            </div>

            <div className="card-body">
              <h3>{item.name}</h3>

              {/* 💰 Price section with discount */}
              <div className="price-row">
                <span className="price">₹{item.price}</span>

                {item.has_discount && (
                  <span className="old-price">₹{item.max_price}</span>
                )}
              </div>

              <div className="bottom">
                {item.in_stock ? (
                  <ShoppingCart
                    className="cart-icon"
                    onClick={() => addToCart(item)}
                  />
                ) : (
                  <span className="out-stock">Out of Stock</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;