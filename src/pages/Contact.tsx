import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_m4h1rjr',           // Your EmailJS service ID
        'template_wbo7gjs',          // Your EmailJS template ID
        templateParams,
        'FCX7iTsF-QhpMYg8l'         // Your EmailJS public key
      );

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['(435) 529-2120'],
      description: 'Call us anytime'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['info@highdesertinns.com'],
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: ['60 North State Street', 'Salina, UT 84654'],
      description: 'Visit us anytime'
    },
    {
      icon: <Clock size={24} />,
      title: 'Hours',
      details: ['Check-in: 3:00 PM', 'Check-out: 11:00 AM', '⠀', 'Front Desk:', '8:00 AM - 11:00 AM', '3:00 PM - 5:00 PM'],
      description: ['']
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Contact Us</h1>
            <p>Get in touch with us for any questions, reservations, or special requests.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section contact-info-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get in Touch</h2>
            <p>We're here to help make your desert getaway perfect.</p>
          </motion.div>

          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
                <div className="contact-description">
                  {Array.isArray(info.description)
                    ? info.description.map((line, i) => <p key={i}>{line}</p>)
                    : info.description && <p>{info.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Send us a Message</h2>
              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={48} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation Inquiry</option>
                        <option value="general">General Information</option>
                        <option value="feedback">Feedback</option>
                        <option value="special-request">Special Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                    <Send size={20} />
                  </motion.button>
                </form>
              )}
            </motion.div>

            <motion.div
              className="contact-map"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Find Us</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d802.5371047382866!2d-111.85950969020769!3d38.95821167116912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874b77307ff70c13%3A0x294abb05b2a546e4!2sHigh%20Desert%20Inn!5e1!3m2!1sen!2sus!4v1753865785556!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="map-info">
                <h4>High Desert Inn</h4>
                <p>
                  60 North State Street
                  <br />
                  Salina, UT 84654
                </p>
                <p>
                  Nestled in the heart of scenic Salina, the High Desert Inn offers comfortable
                  accommodations just minutes away from local attractions, hiking trails, and the
                  stunning Utah desert landscape—perfect for your peaceful getaway.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about your stay at High Desert Inn.</p>
          </motion.div>

          <div className="faq-grid">
            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>What are your check-in and check-out times?</h3>
              <p>
                Check-in is available from 3:00 PM, and check-out is until 11:00 AM. Early check-in
                and late check-out may be available upon request.
              </p>
            </motion.div>

            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Do you offer free cancellation?</h3>
              <p>Yes, we offer free cancellation up to 24 hours before your scheduled arrival date.</p>
            </motion.div>

            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3>Is parking available?</h3>
              <p>
                Yes, we offer complimentary parking for all guests. Secure parking with 24/7
                surveillance is available on-site.
              </p>
            </motion.div>

            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Are pets allowed?</h3>
              <p>
                Yes, we are pet-friendly! We offer special amenities and services for pets and their
                owners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
