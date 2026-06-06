import React, { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { API_ENDPOINTS } from "../../api/endpoints";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
const Specialities = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch all products initially
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch all products
const fetchProducts = async () => {
  try {
    setLoading(true);

    const res = await axios.get(API_ENDPOINTS.products);

    const data = res.data?.data || [];

    // Set Products
    setProducts(data);

    // Create Dynamic Categories
    const uniqueCategories = [];

    data.forEach((item) => {
      const slug = item.category_name
        ?.toLowerCase()
        .replace(/\s+/g, "-");

      const exists = uniqueCategories.find(
        (cat) => cat.slug === slug
      );

      if (!exists) {
        uniqueCategories.push({
          name: item.category_name,
          slug: slug,
        });
      }
    });

    setCategories(uniqueCategories);

    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

  // Fetch products by category
const fetchCategoryProducts = async (slug) => {
  try {
    setLoading(true);

    setActiveCategory(slug);

    const res = await axios.get(
      API_ENDPOINTS.productsByCategory(slug)
    );

    const data = Array.isArray(res.data)
      ? res.data
      : res.data?.data || [];

    setProducts(data);

    setLoading(false);
  } catch (err) {
    console.log(err);
    setLoading(false);
  }
};

  // Add To Cart
  // const addToCart = (item) => {
  //   let cart = JSON.parse(localStorage.getItem("cart")) || [];

  //   const existingItem = cart.find((i) => i.id === item.id);

  //   if (existingItem) {
  //     existingItem.quantity += 1;
  //   } else {
  //     cart.push({ ...item, quantity: 1 });
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cart));

  //   window.dispatchEvent(new Event("cartUpdated"));
  // };
const addToCart = (item) => {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(
    (i) =>
      i.id === item.id &&
      i.selectedVariant?.id ===
        item.selectedVariant?.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: 1,
    });
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
};

  return (
    <section className="specialities-section">
      <div className="container">

        {/* Heading */}
        <div className="section-header">
          <h2>Our Specialities</h2>
        </div>

        {/* Category Pills */}
        <div className="category-pills">

          {/* All Button */}
          <button
            className={`pill ${
              activeCategory === null ? "active-pill" : ""
            }`}
            onClick={fetchProducts}
          >
            All
          </button>

          {categories.map((cat, index) => (
            <button
              key={index}
              className={`pill ${
                activeCategory === cat.slug
                  ? "active-pill"
                  : ""
              }`}
              onClick={() =>
                fetchCategoryProducts(cat.slug)
              }
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products */}
         {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="specialities-grid">

          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              addToCart={addToCart}
            />
          ))}

        </div>
      )}
      </div>
    </section>
  );
};

export default Specialities;