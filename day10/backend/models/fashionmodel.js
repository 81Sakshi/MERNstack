import mongoose from "mongoose";

// Define schema for fashion data
const FashionSchema = new mongoose.Schema({
  pname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const FashionModel = mongoose.model("Fashion", FashionSchema);
export default FashionModel;
