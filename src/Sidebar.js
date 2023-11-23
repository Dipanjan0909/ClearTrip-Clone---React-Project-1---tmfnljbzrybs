import React from "react";
import "./App.css";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import LuggageIcon from "@mui/icons-material/Luggage";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TramIcon from '@mui/icons-material/Tram';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to={"/flights"} style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems:"center"}}>
            <FlightIcon  style={{marginRight:"10px"}}/>
            Flights
          </NavLink>
        </li>
        <li>
          <NavLink to={"/hotels"} style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems:"center"}}>
            <HotelIcon   style={{marginRight:"10px"}} />
            Hotels
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems:"center"}}>
            <LuggageIcon  style={{marginRight:"10px"}} />
            MyTrips
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems:"center"}}>
            <DirectionsBusIcon  style={{marginRight:"10px"}} />
            Buses
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} style={{textDecoration: 'none', color: 'black', display: 'flex', alignItems:"center"}}>
            <TramIcon  style={{marginRight:"10px"}} />
            Trains
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
