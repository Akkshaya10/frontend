import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [fnum, setFnum] = useState("");

  const handleDelete = async () => {
    const res = await axios.delete(`https://assignment-backend-fuuv.onrender.com/flights/${fnum}`);
    alert(res.data.msg);
  };

  return (
    <div>
      <h2>Delete Flight</h2>
      <input
        type="text"
        placeholder="Enter Flight Number"
        value={fnum}
        onChange={(e) => setFnum(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Delete;
