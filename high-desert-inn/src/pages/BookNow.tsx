import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Star, Check, ArrowRight } from 'lucide-react';
import './BookNow.css';

const BookNow: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(1);

  // Set default dates to current day and next day (Mountain Time)
  useEffect(() => {
    const now = new Date();
    const mountainTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Denver"}));
    
    // Check-in date (today)
    const checkInDate = new Date(mountainTime);
    const checkInFormatted = checkInDate.toISOString().split('T')[0];
    
    // Check-out date (tomorrow)
    const checkOutDate = new Date(mountainTime);
    checkOutDate.setDate(checkOutDate.getDate() + 1);
    const checkOutFormatted = checkOutDate.toISOString().split('T')[0];
    
    setCheckIn(checkInFormatted);
    setCheckOut(checkOutFormatted);
  }, []);

  const rooms = [
    {
      id: 'desert-view-suite',
      name: 'Desert View Suite',
      description: 'Spacious suite with panoramic desert views and private balcony',
      price: 189,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['King Bed', 'Desert View', 'Private Balcony', 'Mini Kitchen', 'Free WiFi'],
      rating: 5,
      reviews: 127
    },
    {
      id: 'cozy-standard',
      name: 'Cozy Standard Room',
      description: 'Comfortable room perfect for your desert getaway',
      price: 129,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Queen Bed', 'Mountain View', 'Work Desk', 'Coffee Maker', 'Free WiFi'],
      rating: 4,
      reviews: 89
    },
    {
      id: 'family-suite',
      name: 'Family Suite',
      description: 'Perfect for families with connecting rooms and living area',
      price: 249,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['2 Bedrooms', 'Living Area', 'Kitchen', 'Patio', 'Free WiFi'],
      rating: 5,
      reviews: 156
    }
  ];

  const amenities = [
    'Free High-Speed WiFi',
    'Free Parking',
    '24/7 Front Desk',
    "High Security Parking",
    "Clean Rooms",
    'Room Service'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format dates for Cloudbeds URL
    const checkInFormatted = checkIn.replace(/-/g, '');
    const checkOutFormatted = checkOut.replace(/-/g, '');
    
    // Construct Cloudbeds URL with dates
    const cloudbedsUrl = `https://hotels.cloudbeds.com/en/reservation/WIJcrQ#checkin=${checkIn}&checkout=${checkOut}`;
    
    // Redirect to Cloudbeds booking page
    window.open(cloudbedsUrl, '_blank');
  };

  return (
    <div className="book-now">
      {/* Hero Section */}
      <section className="book-now-hero">
        <div className="book-now-hero-background">
          <div className="book-now-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="book-now-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Book Your Stay</h1>
            <p>Reserve your perfect desert getaway at High Desert Inn.</p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section booking-section">
        <div className="container">
          <div className="booking-content">
            <motion.div
              className="booking-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Reservation Details</h2>
              <form onSubmit={handleBooking} className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="check-in">Check-in Date</label>
                    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                      <Calendar
                        size={20}
                        style={{
                          position: 'absolute',
                          left: 10,
                          pointerEvents: 'none',
                          color: '#666'
                        }}
                      />
                      <input
                        type="date"
                        id="check-in"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        required
                        style={{
                          paddingLeft: 36,
                          height: '2.5rem',
                          width: '100%',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="check-out">Check-out Date</label>
                    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                      <Calendar
                        size={20}
                        style={{
                          position: 'absolute',
                          left: 10,
                          pointerEvents: 'none',
                          color: '#666'
                        }}
                      />
                      <input
                        type="date"
                        id="check-out"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                        style={{
                          paddingLeft: 36,
                          height: '2.5rem',
                          width: '100%',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary booking-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check Availability
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              className="booking-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Why Book Direct?</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <Check size={20} />
                  <span>Best Rate Guarantee</span>
                </div>
                <div className="benefit-item">
                  <Check size={20} />
                  <span>Free Cancellation</span>
                </div>
                <div className="benefit-item">
                  <Check size={20} />
                  <span>Priority Check-in</span>
                </div>
                <div className="benefit-item">
                  <Check size={20} />
                  <span>Exclusive Offers</span>
                </div>
              </div>

              <div className="contact-info">
                <h4>Need Help?</h4>
                <p>Call us at +1 (435) 529-2120</p>
                <p>Email: info@highdesertinns.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*
      <section className="section rooms-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Choose Your Room</h2>
            <p>Select from our carefully designed accommodations, each offering comfort and stunning desert views.</p>
          </motion.div>
          
          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                className={`room-card ${selectedRoom === room.id ? 'selected' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedRoom(room.id)}
              >
                <div className="room-image">
                  <img src={room.image} alt={room.name} />
                  <div className="room-price">${room.price}/night</div>
                  <div className="room-rating">
                    {[...Array(room.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                    <span>({room.reviews} reviews)</span>
                  </div>
                </div>
                <div className="room-content">
                  <h3>{room.name}</h3>
                  <p>{room.description}</p>
                  <div className="room-features">
                    {room.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Amenities Section */}
      <section className="section amenities-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Included Amenities</h2>
            <p>Every stay includes these complimentary amenities to enhance your experience.</p>
          </motion.div>
          
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="amenity-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Check size={20} />
                <span>{amenity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow; 