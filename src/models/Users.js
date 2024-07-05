import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model("users", UserSchema);
