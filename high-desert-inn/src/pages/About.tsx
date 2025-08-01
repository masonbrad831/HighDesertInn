import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, MapPin, Home, Calendar, Star, HandHelping, Sparkles } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { icon: <Home size={24} />, number: 'Family-Owned', label: 'Locally Operated with Care' },
    { icon: <Users size={24} />, number: 'Clean & Comfy', label: 'A Standard You Can See and Feel' },
    { icon: <HandHelping  size={24} />, number: '4.8/5', label: 'Rated by Our Visitors' },
    { icon: <MapPin size={24} />, number: 'Salina, Utah', label: 'Proudly Serving Our Community' },
  ];

  const values = [
    {
      title: 'Genuine Hospitality',
      description: 'We treat every guest like family, offering a warm welcome and personalized care you won’t find at big chains.',
      icon: <Heart size={24} />
    },
    {
      title: 'Clean & Comfortable',
      description: 'Our rooms are known for their exceptional cleanliness and cozy comfort — because a good night’s rest matters.',
      icon: <Sparkles size={24} />
    },
    {
      title: 'Locally Rooted',
      description: 'We take pride in our Salina roots and work with local shops, diners, and events to create a truly local stay.',
      icon: <MapPin size={24} />
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Story</h1>
            <p>Discover the passion and dedication behind High Desert Inn, where every detail is crafted with care to provide you with an unforgettable desert experience.</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>A Legacy of Desert Hospitality</h2>
              <p>
              Traveling can be an exhausting experience. Enter the High Desert Inn, where comfort and hospitality meet.
               Our commitment to service is incomparable and our rates are unmatched. Take a look at our site to find out 
               more about our facility.  We are a small family owned hotel dedicated to provide clean rooms, great service 
               and a level of hospitality that is becoming hard to find.
              </p>
              <p>
              Since we are independently owned and operated we 
               don't have to charge commission fees on each room rented, which allows us to pass on that 10% savings to you, 
               our guest.  Here you will find the cleanest and most comfortable rooms around.
              </p>
              <p>
              If you find something you need, our front desk is available 24 hours a day,  
              We pride ourselves in being the friendliest lodging you will find.  Read our reviews, written by the folks who have stayed here and see the impact we have made on our guests.
              </p>
              <p>
              Can’t find what you’re looking for? Give us a call! ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ (435) 529-2120
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://h-img1.cloudbeds.com/uploads/309508/pxl_20230703_0320400752_gallery~~658705c63868a.jpg" alt="High Desert Inn History" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we do at High Desert Inn.</p>
          </motion.div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Location Section */}
      <section className="section location-section">
        <div className="container">
          <div className="location-content">
            <motion.div
              className="location-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Perfectly Located</h2>
              <p>
              Tucked away in scenic Salina, High Desert Inn offers a peaceful place to rest while keeping you close to everything you need. Whether you're here for outdoor adventures or just passing through, our location makes it easy.              </p>
              <div className="location-features">
                <div className="location-feature">
                  <MapPin size={20} />
                  <span>Just minutes from hiking trails and desert views</span>
                </div>
                <div className="location-feature">
                  <MapPin size={20} />
                  <span>Nearby local diners, shops, and gas stations</span>
                </div>
                <div className="location-feature">
                  <MapPin size={20} />
                  <span>Quick access to I‑70 and major routes</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="location-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://i.ytimg.com/vi/lUffIAeXcqQ/maxresdefault.jpg" alt="Desert Location" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 