import mongoose from "mongoose";

const regSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User",},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true},
  phone: { type: String, required: true },
  pincode: { type: String, required: true },
});

export default mongoose.model("Reg", regSchema);
