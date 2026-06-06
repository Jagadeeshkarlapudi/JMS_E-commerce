import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ item, addToCart }) => {
  const navigate = useNavigate();
  const [showVariantModal, setShowVariantModal] = useState(false);
const [selectedVariant, setSelectedVariant] = useState(null);

  

  return (
    <div className="premium-card">

      {/* Product Image */}
      <div className="premium-image">
        <img
          src={
            item.main_image ||
            "https://via.placeholder.com/400x300?text=No+Image"
          }
          alt={item.name}
          onClick={() => navigate(`/product/${item.id}`)}
        />
      </div>

      {/* Category */}
      <div className="catstock">
      <div className="premium-category">
        {item.category_name}
      </div>
       <div className="stock-status">
        {item.stock_status === "in_stock" ? (
          <span className="in-stock">
            ● In Stock
          </span>
        ) : (
          <span className="out-stock">
            ● Out Of Stock
          </span>
        )}
      </div>
      </div>

      {/* Product Name */}
      <h3 className="premium-title text-capitalize">
        {item.name}
      </h3>

      {/* Price */}
      <div className="premium-price-box">
        <span className="premium-price">
          ₹{item.starting_price}
        </span>

        <span className="starting-text">
          Starting price
        </span>
      </div>

      {/* Variants */}
      {item.variants?.length > 0 && (
        <div className="variant-section">

          <p className="variant-label">
            Variants Available
          </p>

          <div className="variant-buttons">
            {item.variants.map((variant, index) => (
              <button
                key={index}
                className={`variant-btn ${
                  index === 0 ? "active-variant" : ""
                }`}
              >
                {variant.unit}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stock */}
     

      {/* Add To Cart */}
      <div className="product-buttons">

  {/* Add To Cart */}
  <button
    className="premium-cart-btn"
    onClick={() => setShowVariantModal(true)}
  >
    <ShoppingCart size={18} />
    Add Cart
  </button>

  {/* Buy Now */}
  <button
    className="buy-now-btn"
    onClick={() => {
      addToCart(item);

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      navigate("/cart");
    }}
  >
    Buy Now
  </button>

</div>
{showVariantModal && (
  <div
    className="variant-modal-overlay"
    onClick={() => setShowVariantModal(false)}
  >
    <div
      className="variant-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <h3>Select Variant</h3>

      <div className="variant-modal-list">

       {item.variants?.map((variant) => (
  <div
    key={variant.id}
    className={`variant-option ${
      selectedVariant?.id === variant.id
        ? "selected"
        : ""
    }`}
    onClick={() => {
      // Toggle Select / Unselect
      if (selectedVariant?.id === variant.id) {
        setSelectedVariant(null);
      } else {
        setSelectedVariant(variant);
      }
    }}
  >
    <div className="variant-left">

      <div
        className={`variant-radio ${
          selectedVariant?.id === variant.id
            ? "active"
            : ""
        }`}
      >
        {selectedVariant?.id === variant.id && (
          <span className="radio-dot"></span>
        )}
      </div>

      <span>{variant.unit}</span>

    </div>

    <span className="variant-price">
      ₹{variant.price}
    </span>
  </div>
))}

      </div>

      <div className="variant-modal-actions">

        <button
          className="cancel-btn"
          onClick={() =>
            setShowVariantModal(false)
          }
        >
          Cancel
        </button>

        <button
          className="confirm-btn"
          disabled={!selectedVariant}
          onClick={() => {

            addToCart({
              ...item,
              selectedVariant,
              price:
                selectedVariant.price,
            });

            window.dispatchEvent(
              new Event("cartUpdated")
            );

            setShowVariantModal(false);
          }}
        >
          Add To Cart
        </button>

      </div>

    </div>
  </div>
)}
    </div>
  );
};

export default ProductCard;