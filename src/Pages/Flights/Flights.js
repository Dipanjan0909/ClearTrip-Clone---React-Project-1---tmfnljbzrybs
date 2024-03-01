// src/components/FlightBooking.js
import React, { useEffect, useState } from 'react';
import './Flights.css';
import Sidebar from '../../Sidebar';
import axios from 'axios';
import FlightDetail from './FlightDetails';

const FlightBooking = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [flightData, setFlightData] = useState('');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${origin}","destination":"${destination}"}&day=Tue`,
    headers: { 
      'projectID': 'tmfnljbzrybs'
    }
  };
  
  const handleSearch = () => {
    axios.request(config)
    .then((response) => {
      setFlightData((response.data.data.flights));
    })
    .catch((error) => {
      console.log(error);
    });
  }
  useEffect(()=>{

  },[flightData])
  return (
    <div style={{display: 'flex'}}>
    <Sidebar/>
    <div>
    <div className="flight-booking-container" style={flightData?{display:'flex'}:{}}>
      <div className="flight-form" style={flightData?{display:'flex', flexDirection:'row'}:{}}>
        <label>
          Origin:
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </label>
        <label>
          Destination:
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </label>
        <label>
          Departure Date:
          <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
        </label>
        <label>
          Return Date:
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </label>
        <label>
          Passengers:
          <input type="number" value={passengerCount} onChange={(e) => setPassengerCount(e.target.value)} />
        </label>
        <button onClick={handleSearch}style={flightData?{borderRadius:"12px",height:"60px",width:"120px"}:{}}>Search Flights</button>
      </div>
    </div>
    <div>
    {flightData && flightData.map((item,i)=> 
      <FlightDetail {...item} key={i}/>
    )}
    </div>
    </div>
    </div>
  );
};

export default FlightBooking;
