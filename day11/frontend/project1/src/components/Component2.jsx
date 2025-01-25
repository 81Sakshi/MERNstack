import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 

export const Component2 = () => {
  const [movies, setMovies] = useState([]); 

  const apigetdata = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.get("http://127.0.0.1:3000/getmoviedata"); 
      setMovies(response.data); 
      console.log(response.data); 
    } catch (error) {
      alert("Failed to retrieve data");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        
        <div className="text-center mb-4">
          <button 
            className="btn btn-primary"
            onClick={apigetdata}
          >
            Get Movie Data
          </button>
        </div>

       
        <div className="row">
          {movies.map((movie, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                
                <img
                  src={movie.image || "https://via.placeholder.com/150"} 
                  className="card-img-top"
                  alt={movie.moviename || "Movie Poster"}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{movie.moviename}</strong>
                  </h5>
                  <p className="card-text">
                    <strong>Hero:</strong> {movie.hero}
                  </p>
                  <p className="card-text">
                    <strong>Heroine:</strong> {movie.heroine || "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Rating:</strong> {movie.rating || "Unrated"}
                  </p>
                  <p className="card-text">
                    <strong>year:</strong> {movie.Year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Component2;
