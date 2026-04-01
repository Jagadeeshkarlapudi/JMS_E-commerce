import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Topbar from "../components/Topbar";
import WhatsAppButton from "../components/Whatsapp";
import { MessageCircleMore } from "lucide-react";
import axios from "axios";


function Powders() {
    const [powders, setpowders] = useState([]);
          const [loading, setLoading] = useState(true);
        
          const API_URL = "http://localhost:4000/productss"; 
          // replace with your correct local IP if needed
        
          useEffect(() => {
            axios
              .get(API_URL)
              .then((res) => {
                const filtered = res.data.filter(
                  (item) => item.category === "Powders"
                );
                setpowders(filtered);
                setLoading(false);
              })
              .catch((err) => {
                console.log("Error fetching powders:", err);
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
        <div>
            <Topbar/>
            <Navbar/>
             <section className="namkeens-section">
      <div className="container">
        <div className="namkeens-header">
          <h2>Our Powders</h2>
          <p>
            Explore our smooth, tasty, and handcrafted pappads collection made
            with authentic flavors.
          </p>
        </div>

        {loading ? (
          <p className="loading-text">Loading Powders...</p>
        ) : powders.length === 0 ? (
          <p className="loading-text">No Powders found.</p>
        ) : (
          <div className="namkeens-grid">
            {powders.map((item) => (
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
        </div>
     );
}

export default Powders;