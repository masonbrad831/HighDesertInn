import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Star, Mountain, Camera, TreePine, Sun } from 'lucide-react';
import './Attractions.css';

const Attractions: React.FC = () => {
  const attractions = [
    {
      name: 'Desert Vista Point',
      description: 'Breathtaking panoramic views of the entire desert valley. Perfect for sunrise and sunset photography.',
      distance: '5 minutes',
      duration: '1-2 hours',
      cost: 'Free',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Photography', 'Sunset Views', 'Hiking Trails']
    },
    {
      name: 'Cactus Garden Trail',
      description: 'Explore the diverse desert flora on this guided walking trail through native cactus gardens.',
      distance: '10 minutes',
      duration: '2-3 hours',
      cost: '$15',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Guided Tours', 'Native Plants', 'Educational']
    },
    {
      name: 'Stargazing Observatory',
      description: 'Experience the clearest night skies in the region with our state-of-the-art observatory.',
      distance: '15 minutes',
      duration: '2-4 hours',
      cost: '$25',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Telescopes', 'Expert Guides', 'Dark Sky']
    },
    {
      name: 'Desert Adventure Tours',
      description: 'Thrilling off-road adventures through the desert landscape with experienced guides.',
      distance: '20 minutes',
      duration: '3-4 hours',
      cost: '$75',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Off-Road', 'Adventure', 'Guided']
    },
    {
      name: 'Local Art Gallery',
      description: 'Discover works from talented local artists inspired by the desert landscape.',
      distance: '8 minutes',
      duration: '1-2 hours',
      cost: 'Free',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Local Art', 'Cultural', 'Free Entry']
    },
    {
      name: 'Desert Spa & Wellness',
      description: 'Rejuvenate with desert-inspired spa treatments and wellness activities.',
      distance: '12 minutes',
      duration: '2-3 hours',
      cost: '$120',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Spa Treatments', 'Wellness', 'Relaxation']
    }
  ];

  const activities = [
    {
      title: 'Hiking & Trails',
      description: 'Explore miles of scenic hiking trails with varying difficulty levels.',
      icon: <Mountain size={24} />
    },
    {
      title: 'Photography Tours',
      description: 'Capture the stunning desert landscape with professional photography guidance.',
      icon: <Camera size={24} />
    },
    {
      title: 'Wildlife Watching',
      description: 'Observe native desert wildlife in their natural habitat.',
      icon: <TreePine size={24} />
    },
    {
      title: 'Sunset Viewing',
      description: 'Experience the magical desert sunsets from our designated viewing areas.',
      icon: <Sun size={24} />
    }
  ];

  return (
    <div className="attractions">
      {/* Hero Section */}
      <section className="attractions-hero">
        <div className="attractions-hero-background">
          <div className="attractions-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="attractions-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Desert Attractions</h1>
            <p>Discover the natural wonders and exciting activities that surround High Desert Inn.</p>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="section activities-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Popular Activities</h2>
            <p>From adventure to relaxation, there's something for everyone in the desert.</p>
          </motion.div>
          
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="activity-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="activity-icon">
                  {activity.icon}
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="section attractions-grid-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Nearby Attractions</h2>
            <p>Explore the best attractions and experiences the desert has to offer.</p>
          </motion.div>
          
          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                className="attraction-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="attraction-image">
                  <img src={attraction.image} alt={attraction.name} />
                  <div className="attraction-rating">
                    {[...Array(attraction.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <div className="attraction-content">
                  <h3>{attraction.name}</h3>
                  <p>{attraction.description}</p>
                  
                  <div className="attraction-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{attraction.distance}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={16} />
                      <span>{attraction.duration}</span>
                    </div>
                    <div className="detail-item">
                      <DollarSign size={16} />
                      <span>{attraction.cost}</span>
                    </div>
                  </div>
                  
                  <div className="attraction-features">
                    {attraction.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="feature-tag">{feature}</span>
                    ))}
                  </div>
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
            <h2>Plan Your Adventure</h2>
            <p>Our concierge team can help you plan the perfect desert adventure. Contact us to arrange tours, transportation, and reservations.</p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Concierge
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Attractions; 