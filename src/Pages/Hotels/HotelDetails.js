// HotelDetail.js
import React from 'react';
import './HotelDetails.css';

const HotelDetail = ({ images, name, location, rating }) => {
  return (
    <div className="hotel-detail">
      <img className="hotel-image" src={images} alt={name} />
      <div className="info-container">
        <div className="hotel-name">{name}</div>
        <div className="location">{location}</div>
        <div className="rating">Rating: {rating}</div>
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default HotelDetail;
