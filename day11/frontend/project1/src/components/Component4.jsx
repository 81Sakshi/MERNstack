import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS here

export const Component4 = () => {
  const [fashionData, setFashionData] = useState([]);

  const apigetdata = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3000/getfashiondata");
      setFashionData(response.data);
      console.log(response.data);
    } catch (error) {
      alert("Failed to retrieve data");
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mt-4">
      {/* Button to Fetch Product Data */}
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={apigetdata}>
          Get Product Data
        </button>
      </div>

      {/* Display Products in Cards */}
      <div className="row">
        {fashionData.map((product, index) => (
          <div className="col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={product.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={product.pname || "Product"}
              />
              <div className="card-body">
                <h5 className="card-title">{product.pname}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price || "N/A"}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {product.description || "N/A"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component4;
