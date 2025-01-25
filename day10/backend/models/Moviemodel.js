import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  moviename: {
    type: String,
    required: true,
  },
  hero: {
    type: String,
    required: true,
  },
  heroine: { 
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10, 
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10000, 
    
  },
});

const Moviemodel = mongoose.model("Movie", MovieSchema);
export default Moviemodel;
