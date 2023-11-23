// src/components/HomePage.js
import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="home-container">
      <div className="main-content">
        <Sidebar/>
        <div className="content">
          <h1>Welcome to ClearMyTripClone</h1>
          <p>
            Embark on a journey of seamless exploration and discovery with our
            travel booking website. From breathtaking destinations to curated
            experiences, we're your passport to hassle-free adventures. Your
            dream getaway is just a click away – let us turn your travel
            aspirations into unforgettable memories.
          </p>
          <img
            src="https://a.cdn-hotels.com/gdcs/production50/d535/172cb39f-200a-4bed-8911-353860c517c2.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt="none"
            className="main-image"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
