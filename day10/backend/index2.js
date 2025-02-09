import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import FashionModel from "./models/fashionmodel.js";

const app = express();


app.use(cors());
app.use(express.json());

const port = 3000;


app.get("/", (req, res) => {
  res.send("Server is running");
});


app.post("/addfashiondata", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const newData = new FashionModel(req.body);
    await newData.save();
    console.log("Data saved:", req.body);
    res.send("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error.message);
    res.status(500).send("Error saving data");
  }
});


app.get("/getfashiondata", async (req, res) => {
  try {
    const data = await FashionModel.find({});
    console.log("Fetched data:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).send("Error fetching data");
  }
});


mongoose
  .connect("mongodb+srv://sakshi:wXNvxjml6N1Gs0U0@cluster0.gyifs.mongodb.net/")
  .then(() => console.log("Mongodb Database Connected Successfully"))
  .catch((err) => console.error("Database Connection Error:", err.message));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
