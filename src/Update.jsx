import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [fnum, setFnum] = useState("");
  const [update, setUpdate] = useState({ price: "", seatsAvailable: "" });

  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await axios.put(`https://assignment-backend-fuuv.onrender.com/flights/${fnum}`, update);
    alert(res.data.msg);
  };

  return (
    <div>
      <h2>Update Flight</h2>
      <input
        type="text"
        placeholder="Enter Flight Number"
        value={fnum}
        onChange={(e) => setFnum(e.target.value)}
      />
      <input
        type="text"
        name="price"
        placeholder="New Price"
        value={update.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="seatsAvailable"
        placeholder="New Seats"
        value={update.seatsAvailable}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
}

export default Update;
