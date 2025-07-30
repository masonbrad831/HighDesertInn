import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, MapPin, Calendar, Star } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { icon: <Calendar size={24} />, number: '25+', label: 'Years of Excellence' },
    { icon: <Users size={24} />, number: '10,000+', label: 'Happy Guests' },
    { icon: <Award size={24} />, number: '15+', label: 'Industry Awards' },
    { icon: <Star size={24} />, number: '4.8/5', label: 'Guest Rating' },
  ];

  const values = [
    {
      title: 'Authentic Experience',
      description: 'We believe in providing genuine desert hospitality that connects guests with the natural beauty and culture of our region.',
      icon: <Heart size={24} />
    },
    {
      title: 'Sustainable Luxury',
      description: 'Our commitment to environmental responsibility ensures that luxury and sustainability go hand in hand.',
      icon: <Award size={24} />
    },
    {
      title: 'Community Connection',
      description: 'We actively support and collaborate with local businesses and communities to enrich the guest experience.',
      icon: <Users size={24} />
    }
  ];

  const team = [
    {
      name: 'Sarah Martinez',
      position: 'General Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'With over 15 years in hospitality, Sarah ensures every guest receives exceptional service.'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Michael oversees all daily operations to maintain our high standards of excellence.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Guest Relations Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Emily creates memorable experiences and ensures every guest feels at home.'
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
                Founded in 1998, High Desert Inn began as a small family-owned establishment with a simple mission: to provide travelers with an authentic desert experience that combines comfort, luxury, and the breathtaking beauty of the desert landscape.
              </p>
              <p>
                What started as a modest 12-room inn has grown into a beloved destination that welcomes guests from around the world. Our commitment to personalized service and attention to detail has remained unchanged throughout our journey.
              </p>
              <p>
                Today, we continue to honor our roots while embracing modern amenities and sustainable practices. Every room, every meal, and every interaction is designed to create lasting memories and a deep connection to the desert's natural wonders.
              </p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="High Desert Inn History" />
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

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Meet Our Team</h2>
            <p>The dedicated professionals who make High Desert Inn a truly special place.</p>
          </motion.div>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
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
                Nestled in the heart of the desert, High Desert Inn offers the perfect balance of seclusion and accessibility. Our location provides easy access to all the area's attractions while maintaining the peaceful atmosphere that makes our property special.
              </p>
              <div className="location-features">
                <div className="location-feature">
                  <MapPin size={20} />
                  <span>Minutes from hiking trails and scenic viewpoints</span>
                </div>
                <div className="location-feature">
                  <MapPin size={20} />
                  <span>Close to local restaurants and shopping</span>
                </div>
                <div className="location-feature">
                  <MapPin size={20} />
                  <span>Easy access to major highways and airports</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="location-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Desert Location" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 