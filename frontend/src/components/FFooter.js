import React from "react";

function FFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Haunt Explore</h3>
          <p>Discover the most haunted places and supernatural encounters from around the world.</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="#">Haunted Places</a></li>
            <li><a href="#">Horror Books</a></li>
            <li><a href="#">Horror Movies</a></li>
            <li><a href="#">Add Your Haunt</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Contact</h3>
          <p><a href="mailto:info@hauntexplore.com">info@hauntexplore.com</a></p>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Follow Us</h3>
          <ul className="social-links">
            <li><a href="#"><i className="icon-ghost"></i></a></li>
            <li><a href="#"><i className="icon-twitter"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Haunt Explore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FFooter;
