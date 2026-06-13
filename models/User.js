import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true, 
    trim: true,        // 🌟 Input-il ulla extra spaces-ai thukkividum
    lowercase: true    // 🌟 Capital letters-ai small letters-aga maatrum
  },
  password: { 
    type: String, 
    required: true 
  }
});

export default mongoose.model("User", userSchema);
