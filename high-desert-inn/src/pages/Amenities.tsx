import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Car, Waves, Heart, Utensils, Dumbbell, WashingMachine, Tv, AirVent, Shield, Users } from 'lucide-react';
import './Amenities.css';

const Amenities: React.FC = () => {
  const amenities = [
    {
      category: 'Connectivity',
      items: [
        { icon: <Wifi size={24} />, name: 'Free High-Speed WiFi', description: 'Complimentary internet access throughout the property' },
        { icon: <Tv size={24} />, name: 'Smart TVs', description: 'Streaming services and local channels in every room' },
      ]
    },
    {
      category: 'Dining',
      items: [
        { icon: <Coffee size={24} />, name: 'Complimentary Breakfast', description: 'Fresh local ingredients served daily' },
        { icon: <Utensils size={24} />, name: 'On-Site Restaurant', description: 'Desert-inspired cuisine with local flavors' },
      ]
    },
    {
      category: 'Transportation',
      items: [
        { icon: <Car size={24} />, name: 'Free Parking', description: 'Secure parking for all guests' },
        { icon: <Users size={24} />, name: 'Shuttle Service', description: 'Complimentary shuttle to nearby attractions' },
      ]
    },
    {
      category: 'Wellness',
      items: [
        { icon: <Waves size={24} />, name: 'Swimming Pool', description: 'Heated pool with desert views' },
        { icon: <Heart size={24} />, name: 'Spa Services', description: 'Relaxing treatments and massages' },
        { icon: <Dumbbell size={24} />, name: 'Fitness Center', description: '24/7 access to modern equipment' },
      ]
    },
    {
      category: 'Comfort',
      items: [
        { icon: <AirVent size={24} />, name: 'Climate Control', description: 'Individual temperature control in each room' },
        { icon: <WashingMachine size={24} />, name: 'Laundry Service', description: 'Same-day laundry and dry cleaning' },
      ]
    },
    {
      category: 'Safety',
      items: [
        { icon: <Shield size={24} />, name: '24/7 Security', description: 'Round-the-clock security monitoring' },
        { icon: <Users size={24} />, name: 'Concierge Service', description: 'Personal assistance for all your needs' },
      ]
    }
  ];

  const specialFeatures = [
    {
      title: 'Desert View Balconies',
      description: 'Every room features a private balcony with panoramic desert views',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Local Art Gallery',
      description: 'Showcasing works from talented local artists throughout the property',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Stargazing Deck',
      description: 'Experience the breathtaking desert night sky from our rooftop deck',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="amenities">
      {/* Hero Section */}
      <section className="amenities-hero">
        <div className="amenities-hero-background">
          <div className="amenities-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="amenities-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Amenities</h1>
            <p>Discover the perfect blend of luxury and comfort that makes your stay at High Desert Inn truly exceptional.</p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section amenities-grid-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Everything You Need</h2>
            <p>From essential comforts to luxury extras, we've thought of everything to make your stay perfect.</p>
          </motion.div>
          
          <div className="amenities-categories">
            {amenities.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="amenity-category"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3>{category.category}</h3>
                <div className="amenity-items">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="amenity-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (itemIndex * 0.1) }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="amenity-icon">
                        {item.icon}
                      </div>
                      <div className="amenity-content">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="section special-features-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Unique Experiences</h2>
            <p>Discover the special features that set High Desert Inn apart from the rest.</p>
          </motion.div>
          
          <div className="special-features-grid">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="special-feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section additional-services-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Additional Services</h2>
            <p>We offer a range of additional services to enhance your stay and make it truly memorable.</p>
          </motion.div>
          
          <div className="services-grid">
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3>Event Planning</h3>
              <p>From intimate gatherings to corporate events, our team can help plan and execute your perfect desert celebration.</p>
            </motion.div>
            
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3>Guided Tours</h3>
              <p>Explore the desert with our knowledgeable guides who can show you hidden gems and share local insights.</p>
            </motion.div>
            
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3>Pet-Friendly Accommodations</h3>
              <p>Your furry friends are welcome! We offer special amenities and services for pets and their owners.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities; 