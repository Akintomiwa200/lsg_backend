import mongoose from "mongoose";

const BuyerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  phone: { type: String, required: true },
  plots: { type: Number, required: true }, // Ensure plots is a number
  purpose: { type: String, required: true }, // Purpose of purchase
}, { timestamps: true });

const Buyer = mongoose.model("Buyer", BuyerSchema);
export default Buyer;