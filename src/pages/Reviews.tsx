import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Calendar, MapPin, Users } from 'lucide-react';
import './Reviews.css';

const Reviews: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      name: 'First Last',
      location: '',
      rating: 5,
      date: 'July 2024',
      text: 'Placeholder Text',
      image: ''
    },
    {
      id: 1,
      name: 'First Last',
      location: '',
      rating: 5,
      date: 'July 2024',
      text: 'Placeholder Text',
      image: ''
    },
    {
      id: 1,
      name: 'First Last',
      location: '',
      rating: 5,
      date: 'July 2024',
      text: 'Placeholder Text',
      image: ''
    },
    {
      id: 1,
      name: 'First Last',
      location: '',
      rating: 5,
      date: 'July 2024',
      text: 'Placeholder Text',
      image: ''
    },
    {
      id: 1,
      name: 'First Last',
      location: '',
      rating: 5,
      date: 'July 2024',
      text: 'Placeholder Text',
      image: ''
    },
    {
      id: 1,
      name: 'First Last',
      location: '',
      rating: 5,
      date: 'July 2024',
      text: 'Placeholder Text',
      image: ''
    }
  ];

  const stats = [
    { icon: <Star size={24} />, number: '4.8/5', label: 'Average Rating' },
    { icon: <Users size={24} />, number: '500+', label: 'Happy Guests' },
    { icon: <Calendar size={24} />, number: '25+', label: 'Years of Excellence' },
    { icon: <MapPin size={24} />, number: '98%', label: 'Would Recommend' },
  ];

  const filteredReviews = selectedRating 
    ? reviews.filter(review => review.rating === selectedRating)
    : reviews;

  return (
    <div className="reviews">
      {/* Hero Section */}
      <section className="reviews-hero">
        <div className="reviews-hero-background">
          <div className="reviews-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="reviews-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Guest Reviews</h1>
            <p>Hear from our guests about their experiences at High Desert Inn.</p>
          </motion.div>
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

      {/* Filter Section */}
      <section className="section filter-section">
        <div className="container">
          <motion.div
            className="filter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Filter Reviews</h2>
            <div className="rating-filters">
              {[5, 4, 3, 2, 1].map((rating) => (
                <motion.button
                  key={rating}
                  className={`rating-filter ${selectedRating === rating ? 'active' : ''}`}
                  onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span>{rating} Stars</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section reviews-grid-section">
        <div className="container">
          <motion.div
            className="reviews-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="review-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="review-header">
                  <div className="review-author">
                    <div>
                      <h4>{review.name}</h4>
                      <p>{review.location}</p>
                    </div>
                  </div>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <div className="review-content">
                  <Quote size={20} className="quote-icon" />
                  <p>{review.text}</p>
                </div>
                <div className="review-footer">
                  <span>{review.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <h2>Share Your Experience</h2>
            <p>We'd love to hear about your stay at High Desert Inn. Your feedback helps us continue providing exceptional service.</p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://search.google.com/local/writereview?placeid=ChIJEwz3fzB3S4cR5EalsgW7Sik', '_blank')}
              >
              Write a Review
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews; 