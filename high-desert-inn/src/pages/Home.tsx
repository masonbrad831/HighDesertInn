import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Calendar, Users, MapPin, Wifi, Coffee, Car } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const featuredAmenities = [
    { icon: <Wifi size={24} />, title: 'Free WiFi', description: 'High-speed internet throughout the property' },
    { icon: <Coffee size={24} />, title: 'Complimentary Breakfast', description: 'Fresh local ingredients every morning' },
    { icon: <Car size={24} />, title: 'Free Parking', description: 'Secure parking for all guests' },
    { icon: <MapPin size={24} />, title: 'Prime Location', description: 'Minutes from desert attractions' },
  ];

  const roomTypes = [
    {
      name: 'Desert View Suite',
      description: 'Spacious suite with panoramic desert views',
      price: '$189',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['King Bed', 'Desert View', 'Private Balcony', 'Mini Kitchen']
    },
    {
      name: 'Cozy Standard Room',
      description: 'Comfortable room perfect for your desert getaway',
      price: '$129',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Queen Bed', 'Mountain View', 'Work Desk', 'Coffee Maker']
    },
    {
      name: 'Family Suite',
      description: 'Perfect for families with connecting rooms',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['2 Bedrooms', 'Living Area', 'Kitchen', 'Patio']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely stunning views and the most comfortable bed I\'ve ever slept in. The staff was incredibly friendly!',
      location: 'New York, NY'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Perfect location for exploring the desert. The breakfast was amazing and the rooms were spotless.',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'We loved our stay! The sunset views from our balcony were breathtaking. Highly recommend!',
      location: 'Phoenix, AZ'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Welcome to High Desert Inn</h1>
            <p>Experience luxury and adventure in the heart of the desert. Where comfort meets breathtaking landscapes and unforgettable memories await.</p>
            <div className="hero-buttons">
              <Link to="/book-now" className="btn btn-primary">
                Book Your Stay
                <ArrowRight size={20} />
              </Link>
              <Link to="/amenities" className="btn btn-secondary">
                Explore Amenities
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stat-item">
              <Calendar size={24} />
              <div>
                <h3>365 Days</h3>
                <p>Open Year-Round</p>
              </div>
            </div>
            <div className="stat-item">
              <Users size={24} />
              <div>
                <h3>50+ Rooms</h3>
                <p>Comfortable Accommodations</p>
              </div>
            </div>
            <div className="stat-item">
              <Star size={24} />
              <div>
                <h3>4.8/5</h3>
                <p>Guest Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="section amenities-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose High Desert Inn?</h2>
            <p>Discover the perfect blend of luxury amenities and natural beauty that makes your stay unforgettable.</p>
          </motion.div>
          <div className="amenities-grid">
            {featuredAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="amenity-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="amenity-icon">
                  {amenity.icon}
                </div>
                <h3>{amenity.title}</h3>
                <p>{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section className="section rooms-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Accommodations</h2>
            <p>Choose from our carefully designed rooms and suites, each offering comfort and stunning desert views.</p>
          </motion.div>
          <div className="rooms-grid">
            {roomTypes.map((room, index) => (
              <motion.div
                key={index}
                className="room-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="room-image">
                  <img src={room.image} alt={room.name} />
                  <div className="room-price">{room.price}</div>
                </div>
                <div className="room-content">
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                  <div className="room-features">
                    {room.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <Link to="/book-now" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>What Our Guests Say</h2>
            <p>Don't just take our word for it - hear from our satisfied guests about their experiences.</p>
          </motion.div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready for Your Desert Adventure?</h2>
            <p>Book your stay today and experience the magic of the High Desert Inn.</p>
            <Link to="/book-now" className="btn btn-primary">
              Book Your Stay Now
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 