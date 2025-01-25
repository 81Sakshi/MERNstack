import React, { useState } from "react";
import axios from "axios";

export const Component3 = () => {
  const [pname, setPname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const apipostdata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/addfashiondata", {
        pname,
        category,
        price,
        description,
      });
      alert("Data saved successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Post data failed:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2 >Add Product</h2>
      <form onSubmit={apipostdata}>
        <div className="mb-3">
          <label htmlFor="pname" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="pname"
            placeholder="Enter product name"
            onChange={(e) => setPname(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Enter category"
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product Data
        </button>
      </form>
    </div>
  );
};

export default Component3;
