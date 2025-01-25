import React, { useState } from "react";
import axios from "axios"; 

export const Component = () => {
  const [moviename, setmoviename] = useState("");
  const [hero, setheroname] = useState("");
  const [heroine, setheroinename] = useState("");
  const [rating, setrating] = useState("");
  const [year, setyear] = useState("");

  const apipostdata = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://127.0.0.1:3000/addmoviedata", {
        moviename,
        hero,
        heroine,
        rating,
        year,
      });
      alert("Data saved successfully!");
      console.log(response.data); 
    } catch (error) {
      console.error("Post data failed:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  return (
    <>
      <div className="form">
        <form onSubmit={apipostdata}>
          <div className="div1">
            <input
              type="text"
              onChange={(e) => setmoviename(e.target.value)}
              id="moviename"
              name="moviename"
              placeholder="Enter movie name"
              required
            />
            <br />
            <br />
            <input
              type="text"
              onChange={(e) => setheroname(e.target.value)}
              id="hero"
              name="hero"
              placeholder="Enter hero name"
              required
            />
            <br />
            <br />
            <input
              type="text"
              onChange={(e) => setheroinename(e.target.value)}
              id="heroine"
              name="heroine"
              placeholder="Enter heroine name"
              required
            />
            <br />
            <br />
            <input
              type="number"
              onChange={(e) => setrating(e.target.value)}
              id="rating"
              name="rating"
              placeholder="Enter rating"
              required
              min="1" 
              max="10" 
            />
            <br />
            <br />
            <input
              type="number"
              onChange={(e) => setyear(e.target.value)}
              id="year"
              name="year"
              placeholder="Enter release year"
              required
               min="1" 
              max="10000"
              
            />
            <br />
            <br />
            <button type="submit">Add Movie Data</button>
          </div>

          
        </form>
      </div>
    </>
  );
};

export default Component;
