import React from "react";
import {
  

  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <img
            src="/jms_white_logo.png"
            alt="Jyothi Millet Snacks"
            className="footer-logo"
          />

          <p>
            Authentic homemade snacks prepared with
            traditional recipes and premium ingredients.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Policies</h3>

          <ul>
            <li>
              <a href="/terms-and-conditions">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="/privacy-policy">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="/returns-refunds">
                Refund Policy
              </a>
            </li>

            <li>
              <a href="/faq">
                FAQ's
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Contact Us</h3>

          <p>
            <Mail size={16} />
            support@jyothimilletsnacks.in
          </p>

          <p>
            <Phone size={16} />
            +91 6300692846
          </p>
        </div>

      </div>

      {/* Payment Methods */}
      <div className="payment-section">

        <h4>Accepted Payments</h4>

        <div className="payment-icons">
          <img src="/upi.png" alt="UPI" />
          <img src="/rupay.png" alt="RuPay" />
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="MasterCard" />
        </div>

      </div>

      <hr />

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Jyothi Millet Snacks.
          All Rights Reserved.
        </p>

        <div className="social-icons">

          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook size={20} />
          </a> */}

          {/* <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={20} />
          </a> */}

        </div>

      </div>

    </footer>
  );
};

export default Footer;