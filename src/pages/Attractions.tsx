import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Star, Mountain, Camera, TreePine, Sun } from 'lucide-react';
import './Attractions.css';

const Attractions: React.FC = () => {
  const attractions = [
    {
      name: 'Sevier Valley Coffee Co.',
      description: 'Located right next door to the hotel. Quite possibly the best coffee products in the state.  Wonderful people.',
      distance: '1 minute',
      duration: '',
      cost: '',
      rating: 4.8,
      image: 'https://b8aab2f4f459ff7a2030.cdn6.editmysite.com/uploads/b/b8aab2f4f459ff7a203036d7c831cf4d7d302486d4894cf306ca05893fda1a4e/Untitled%20design%20%283%29_1736445791.png?width=2400&optimize=medium',
      features: ['Breakfast', 'Coffee', 'Gift Shop', 'Souvenirs']
    },
    {
      name: "Mom's Cafe",
      description: "Mom's Cafe Great homestyle dining.  Breakfast, Lunch and Dinner.",
      distance: '1 minute',
      duration: '1-2 hours',
      cost: '',
      rating: 4,
      image: 'https://live.staticflickr.com/2207/2146928808_c02356095d_b.jpg',
      features: ['Great Food', 'Home Style Cooking', 'Great Service']
    },
    {
      name: 'The Hot Spot',
      description: 'Old fashioned fast food.  Burgers, shakes and fries and a ton of other great things on the menu',
      distance: '1 minutes',
      duration: '30 minutes',
      cost: '',
      rating: 4,
      image: 'https://www.utahsadventurefamily.com/wp-content/uploads/2018/05/The-Hot-Spot-5-scaled.jpg',
      features: ['Great Food', 'Fast Food', 'Great Service']
    },
    {
      name: 'Eyes to the Sky Balloon Festival',
      description: (
        <>
          A world class hot air balloon event June 20th - 22th 2025{' '}
          <a
            href="https://eyestotheskyballoonfestival.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0077cc', textDecoration: 'underline' }}
          >
            eyestotheskyballoonfestival.com
          </a>
        </>
      ),
      distance: '1 minute',
      duration: '3-4 hours',
      cost: '',
      rating: 4,
      image: 'https://i0.wp.com/wolfharttimages.com/wp-content/uploads/2021/04/Salina-06.jpg?resize=1024%2C683&ssl=1',
      features: ['Fun', 'Family', 'Food', 'Music']
    },
    {
      name: "Miss Mary's Historical Museum",
      description: 'Historical museum of Salina, and surrounding area.',
      distance: '1 minute',
      duration: '',
      cost: 'Free',
      rating: 5,
      image: 'https://nowplayingutah.com/wp-content/uploads/sites/nowplayingutah.com/images/venue/65415/missmaryshistoricalmuseum_venueimage.jpg',
      features: ['History', 'Cultural', 'Free Entry']
    },
    {
      name: 'Blackhawk Arena',
      description: 'Home to regional equestrian events, concerts, and activities.',
      distance: '3 minutes',
      duration: '',
      cost: '',
      rating: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUT7tu5Vc08OpGedkHK7FIAjkZY_xp8gOe2Q&s',
      features: ['', 'Wellness', 'Relaxation']
    }
  ];

  const activities = [
    {
      title: 'Hiking & Nature Walks',
      description: 'Enjoy peaceful hikes at nearby Blackhawk Mountain or explore the Gooseberry Trail for forest views and fresh mountain air.',
      icon: <Mountain size={24} />
    },
    {
      title: 'Historic Main Street',
      description: 'Stroll through downtown Salina’s historic Main Street, grab a bite at Mom’s Café, and experience the charm of a classic Utah town.',
      icon: <Camera size={24} />
    },
    {
      title: 'ATV & Off-Roading Trails',
      description: 'Ride through the scenic Fishlake National Forest or hit the famous Arapeen Trail System right from town.',
      icon: <TreePine size={24} />
    },
    {
      title: 'Big Rock Candy Mountain',
      description: 'take a short drive to the colorful canyons of Big Rock Candy Mountain.',
      icon: <Mountain size={24} />
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
            <h1>Local Attractions</h1>
            <p>Discover the hidden gems, scenic landscapes, and unforgettable experiences surrounding High Desert Inn in Salina, Utah.</p>
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
            <p>From outdoor adventures to small-town charm, there's something for everyone in Salina, Utah.</p>
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
                    {[...Array(Math.floor(attraction.rating))].map((_, i) => (
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
                    {attraction.duration?.trim() && (
                      <div className="detail-item">
                        <Clock size={16} />
                        <span>{attraction.duration}</span>
                    </div>
                    )}
                    {attraction.cost?.trim() && (
                      <div className="detail-item">
                        <DollarSign size={16} />
                        <span>{attraction.cost}</span>
                      </div>
                    )}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Attractions; 