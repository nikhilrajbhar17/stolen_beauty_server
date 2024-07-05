import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { scoreRouter } from "./routes/score.js";
import dotenv from "dotenv";
const PORT = process.env.PORT || 3001;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/result", scoreRouter);

const DB_NAME = 'your_local_db_name';

// Example connection string for a local MongoDB instance
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.listen(PORT, () => console.log("Server started"));