import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <motion.div
              className="footer-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>High Desert Inn</h3>
              <p>Where Comfort Meets Adventure</p>
              <p className="footer-description">
              Experience the perfect blend of cozy luxury and the stunning natural beauty of Salina, Utah. Your gateway to memorable moments and breathtaking landscapes in the heart of scenic Utah.
              </p>
            </motion.div>
          </div>

          <div className="footer-section">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="footer-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/amenities">Amenities</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/attractions">Attractions</Link></li>
              <li><Link to="/book-now">Book Now</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </motion.ul>
          </div>

          <div className="footer-section">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contact Info
            </motion.h4>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="contact-item">
                <MapPin size={16} />
                <span>60 North State Street<br />Salina, UT 84654</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>(435) 529-2120</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span><a href="mailto:info@highdesertinn.com">info@highdesertinn.com</a></span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>Check-in: 3:00 PM<br />Check-out: 11:00 AM</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="footer-bottom-content">
            <p>©2023 by Bradford Lodging, LLC.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 