import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  // ✅ Increase quantity
  const handleIncrease = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    localStorage.setItem("cart", JSON.stringify(cart));

    setCartItems(cart); // ✅ FIXED

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // ✅ Decrease quantity
  const handleDecrease = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(cart));

    setCartItems(cart); // ✅ FIXED

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // ✅ Remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated")); // ✅ IMPORTANT
  };

  // ✅ Total price
  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
    
      <Navbar />

      <div className="cart-container">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.main_image} alt={item.name} />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="quantity-box">
                  {/* ✅ FIXED BUTTONS */}
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <div className="cart-total">
          <h3>Total: ₹{getTotal()}</h3>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;