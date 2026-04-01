import React from "react";
// import "./Footer.css";
// import { Instagram, Youtube, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Support Section */}
        <div className="support-heading">Need Support ? Contact Us</div>

       <div className="support-box">
  <a href="mailto:support@jyothimillets.com" className="contact-card">
    Mail: support@jyothimillets.com
  </a>

  <a href="tel:+916300692846" className="contact-card">
    Call: +91 6300692846
  </a>
</div>

        {/* Social Section */}
        {/* <div className="social-box">
          <h3>Follow us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <Instagram size={32} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={32} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={32} />
            </a>
          </div>
        </div> */}

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>2026. All Rights Reserved</p>
          <div className="footer-links me-5 ">
            <a href="/faq/">FAQ's</a>
            <span>|</span>
            <a href="/terms-and-conditions/">Terms & Conditions</a>
            <span>|</span>
            <a href="/privacy-policy/">Privacy Policy</a>
            <span>|</span>
            <a href="/returns-refunds/">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;