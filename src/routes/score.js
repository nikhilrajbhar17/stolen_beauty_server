import express from "express";

const router = express.Router();
import { ScoreModel } from "../models/Scores.js";

router.post("/", async (req, res) => {
  const { email, total, time } = req.body;

  const existingScore = await ScoreModel.findOne({ email });

  if (existingScore) {
    if (total > existingScore.total) {
      existingScore.total = total;
      existingScore.time = time;
      await existingScore.save();
      res.json({ message: "Score updated successfully" });
    } else {
      res.json({ message: "Score not updated" });
    }
  } else {
    const newScore = new ScoreModel({ email, total, time });
    await newScore.save();
    res.json({ message: "Score saved successfully" });
  }
});

router.get("/", async (req, res) => {
  try {
    const scores = await ScoreModel.find({}).sort({ total: -1 });
    res.json(scores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export { router as scoreRouter };