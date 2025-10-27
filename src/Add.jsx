import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [flight, setFlight] = useState({
    flightNumber: "",
    airline: "",
    origin: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    seatsAvailable: "",
    price: "",
  });

  const handleChange = (e) => {
    setFlight({ ...flight, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await axios.post("https://assignment-backend-fuuv.onrender.com/flights", flight);
    alert(res.data.msg);
  };

  return (
    <div>
      <h2>Add Flight</h2>
      {Object.keys(flight).map((key) => (
        <div key={key}>
          <input
            type="text"
            name={key}
            placeholder={key}
            value={flight[key]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Add Flight</button>
    </div>
  );
}

export default Add;
