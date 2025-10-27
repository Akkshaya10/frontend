import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [flights, setFlights] = useState([]);

  const loadFlights = async () => {
    const res = await axios.get("https://assignment-backend-fuuv.onrender.com/flights");
    setFlights(res.data);
  };

  useEffect(() => {
    loadFlights();
  }, []);

  return (
    <div>
      <h2>All Flights</h2>
      <button onClick={loadFlights}>Reload</button>
      <table border="1" style={{ margin: "20px auto", width: "80%" }}>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Seats</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((f) => (
            <tr key={f.flightNumber}>
              <td>{f.flightNumber}</td>
              <td>{f.airline}</td>
              <td>{f.origin}</td>
              <td>{f.destination}</td>
              <td>{f.departureTime}</td>
              <td>{f.arrivalTime}</td>
              <td>{f.seatsAvailable}</td>
              <td>{f.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
