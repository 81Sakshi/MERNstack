import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Moviemodel from "./models/Moviemodel.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/addmoviedata", async (req, res) => {
  try {
    console.log("Request Body:", req.body); 
    const newdata = new Moviemodel(req.body);
    await newdata.save();
    console.log("Data saved:", req.body);
    res.send("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error.message);
    res.status(500).send("Error saving data");
  }
});

app.get("/getmoviedata", async (req, res) => {
  try {
    const newdata = await Moviemodel.find({});
    console.log("Fetched data:", newdata);
    res.json(newdata);
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
