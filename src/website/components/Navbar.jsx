import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [desktopCategoryOpen, setDesktopCategoryOpen] = useState(false);

  const cartCount = 3;

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileCategoryOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LEFT SIDE - Desktop */}
        <nav className="nav-left desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about/" className="nav-link">About</Link>

          <div
            className="dropdown"
            onMouseEnter={() => setDesktopCategoryOpen(true)}
            onMouseLeave={() => setDesktopCategoryOpen(false)}
          >
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => setDesktopCategoryOpen(!desktopCategoryOpen)}
            >
              Categories <ChevronDown size={16} />
            </button>

            <div className={`dropdown-menu ${desktopCategoryOpen ? "show" : ""}`}>
              <Link to="/namkeens/">Namkeens</Link>
              <Link to="/pickels/">Pickles</Link>
              <Link to="/pappads/">Papads</Link>
              <Link to="/sweets/">Sweets</Link>
              <Link to="/powders/">Powders</Link>

            </div>
          </div>
        </nav>

        {/* CENTER LOGO - Desktop */}
        <div className="logo desktop-logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* RIGHT SIDE - Desktop */}
        <nav className="nav-right desktop-nav">
          {/* <Link to="/track-order" className="nav-link">Track Order</Link> */}
          <Link to="/contact-us/" className="nav-link">Contact Us</Link>

          <Link to="/cart" className="cart-icon-wrapper">
            <ShoppingCart size={24} className="cart-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>

        {/* MOBILE HEADER */}
        <div className="mobile-header">
          <div className="logo mobile-logo">
            <Link to="/">
              <img src="/logo.png" alt="Logo" />
            </Link>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about/" onClick={closeMobileMenu}>About</Link>

          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-btn"
              onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
              type="button"
            >
              Categories <ChevronDown size={16} />
            </button>

            {mobileCategoryOpen && (
              <div className="mobile-dropdown-menu">
                <Link to="/namkeens/" onClick={closeMobileMenu}>Namkeens</Link>
                <Link to="/pickels/" onClick={closeMobileMenu}>Pickles</Link>
                <Link to="/pappads/" onClick={closeMobileMenu}>Papads</Link>
                <Link to="/sweets/" onClick={closeMobileMenu}>Sweets</Link>
                <Link to="/powders/" onClick={closeMobileMenu}>Powders</Link>

              </div>
            )}
          </div>

          {/* <Link to="/track-order" onClick={closeMobileMenu}>Track Order</Link> */}
          <Link to="/contact-us/" onClick={closeMobileMenu}>Contact Us</Link>

          <Link to="/cart" onClick={closeMobileMenu} className="mobile-cart">
            <div className="cart-icon-wrapper">
              <ShoppingCart size={20} className="cart-icon" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            Cart
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;