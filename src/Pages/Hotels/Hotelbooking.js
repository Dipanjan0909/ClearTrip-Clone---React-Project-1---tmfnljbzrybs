// src/components/HotelBooking.js
import React, { useState,useEffect } from 'react';
import './Hotelbooking.css';
import Sidebar from '../../Sidebar';
import HotelDetails from './HotelDetails';
import axios from 'axios';

const Hotelbooking = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [hoelData, setHotelData] = useState('');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}`,
    headers: { 
      'projectID': 'tmfnljbzrybs'
    }
  };
  const handleSearch = () => {
    // Add logic for searching hotels based on input parameters
    console.log('Searching hotels...');
    axios.request(config)
    .then((response) => {
      // console.log(response.data.data.hotels)
      setHotelData((response.data.data.hotels));
    })
    .catch((error) => {
      console.log(error);
    });
  };
  useEffect(()=>{

  },[hoelData])
  return (
    <div style={{display: 'flex'}}>
      <Sidebar/>
    <div className="hotel-booking-container">
      <div className="hotel-form">
        <label>
          Location:
          <input style={{marginLeft: "10px"}} type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Check-in Date:
          <input style={{marginLeft: "10px"}} type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
        </label>
        <label>
          Check-out Date:
          <input style={{marginLeft: "10px"}} type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
        </label>
        <label>
          Guests:
          <input style={{marginLeft: "10px"}} type="number" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} />
        </label>
        <button onClick={handleSearch}>Search Hotels</button>
      </div>
      {/* Display hotel results or additional components here */}
    </div>
    <div>
    {hoelData && hoelData.map((item,i)=> 
      <HotelDetails {...item} key={i}/>
    )}
    </div>
    </div>
  );
};

export default Hotelbooking;
