import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Update from "./Update";
import Delete from "./Delete";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Flight Booking Management</h1>
      <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <Link to="/">All Flights</Link>
        <Link to="/add">Add Flight</Link>
        <Link to="/update">Update Flight</Link>
        <Link to="/delete">Delete Flight</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
