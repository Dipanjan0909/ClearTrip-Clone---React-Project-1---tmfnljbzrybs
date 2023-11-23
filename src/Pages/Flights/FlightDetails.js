// FlightDetail.js
import React from 'react';
import './FlightDetails.css';

const FlightDetail = ({ flightID, arrivalTime, departureTime, availableSeats, ticketPrice }) => {
  return (
    <div className="flight-detail">
      <div className="flight-id">Flight ID: {flightID}</div>
      <div className="time">
        Departure Time: {departureTime} | Arrival Time: {arrivalTime}
      </div>
      <div className="seats">Available Seats: {availableSeats}</div>
      <div className="price">Ticket Price: ₹{ticketPrice}</div>
      <button className="book-button">Book Now</button>
    </div>
  );
};

export default FlightDetail;
