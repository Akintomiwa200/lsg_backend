import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  plots: { type: Number, required: true }, // Ensure plots is a number
  purpose: { type: String, required: true }, // Purpose of purchase
}, { timestamps: true });

const Quote = mongoose.model("Quote", QuoteSchema);

export default Quote;



