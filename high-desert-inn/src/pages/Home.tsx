import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Calendar, Users, MapPin, Wifi, Coffee, Car } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const handleDirectBooking = () => {
    // Get current dates in Mountain Time
    const now = new Date();
    const mountainTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Denver"}));
    
    // Check-in date (today)
    const checkInDate = new Date(mountainTime);
    const checkIn = checkInDate.toISOString().split('T')[0];
    
    // Check-out date (tomorrow)
    const checkOutDate = new Date(mountainTime);
    checkOutDate.setDate(checkOutDate.getDate() + 1);
    const checkOut = checkOutDate.toISOString().split('T')[0];
    
    // Redirect to Cloudbeds with current dates
    const cloudbedsUrl = `https://hotels.cloudbeds.com/en/reservation/WIJcrQ#checkin=${checkIn}&checkout=${checkOut}`;
    window.open(cloudbedsUrl, '_blank');
  };

  const featuredAmenities = [
    { icon: <Wifi size={24} />, title: 'Free WiFi', description: 'High-speed internet throughout the property' },
    { icon: <Coffee size={24} />, title: 'Picnic area', description: 'Enjoy a picnic area with a grill and covered seating' },
    { icon: <Car size={24} />, title: 'Free Parking', description: 'Secure parking with 24/7 surveillance for all guests' }
  ];

  const roomTypes = [
    {
      name: 'Standard King Room',
      description: '',
      price: '',
      image: 'https://h-img1.cloudbeds.com/uploads/309508/pxl_20231227_201445128_featured~~658d7e7c57a1e.jpg',
      features: ['King Bed']
    },
    {
      name: 'Standard Double Queen Room',
      description: '',
      price: '',
      image: 'https://h-img3.cloudbeds.com/uploads/309508/pxl_20231227_200713462_featured~~658d81b94f33b.jpg',
      features: ['2 Queen Beds']
    },
    {
      name: 'Pet Friendly Double Queen',
      description: '',
      price: '',
      image: 'https://h-img3.cloudbeds.com/uploads/309508/img_20220103_185518762_featured~~67b55fcea87f7.jpg',
      features: ['2 Queen Beds', 'Pet Friendly']
    },
    {
      name: 'Kitchenette Family Room',
      description: '',
      price: '',
      image: 'https://h-img2.cloudbeds.com/uploads/309508/pxl_20231227_201325765_featured~~658d82d49d1b1.jpg',
      features: ['2 Queen Beds', 'Kitchen']
    }
  ];

  const testimonials = [
    {
      name: 'Crystal Monsivais Garcia-Alba',
      rating: 5,
      text: 'My husband and I stayed here for a couple nights, it was really nice. The guy at the front was very attentive, very nice and welcoming. The location was also very calm, easy to find and felt very safe. I was worried at first because it is a small town lol but it did feel very friendly and welcoming. My husband and will be going back in February and with be staying here. The only thing I do have to say is that our security deposit was released a couple days late but as soon as I called, they released it and explained that it was a system error they’re working to fix. The rooms were clean, organized and smelled good! Overall a 9.5/10 experience!',
      location: 'Salina, UT'
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
            <p>We offer numerous amenities and services to make your stay at the High Desert Inn a pleasure. We’re dedicated to blending comfort and convenience to provide you a relaxing, serene stay.   Featuring clean and comfy accommodations and an attentive staff, we're sure you’ll have a pleasant experience here. Thank you for the opportunity to serve you, as our guests.</p>
            <div className="hero-buttons">
              <button onClick={handleDirectBooking} className="btn btn-primary">
                Book Your Stay
                <ArrowRight size={20} />
              </button>
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
                <p>Clean and  Comfortable Accommodations</p>
              </div>
            </div>
            <div className="stat-item">
              <Star size={24} />
              <div>
                <h3>4.8/5</h3>
                <p>183 Reviews</p>
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
                  <button onClick={handleDirectBooking} className="btn btn-primary">
                    Book Now
                  </button>
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
            <button onClick={handleDirectBooking} className="btn btn-primary">
              Book Your Stay Now
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 