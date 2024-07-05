import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  total: { type: Number, required: true },
  time: { type: Number, required: true },
  rank: {type: Number}
});

export const ScoreModel = mongoose.model("scores", ScoreSchema);
