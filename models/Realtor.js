import mongoose from "mongoose";

const RealtorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  agency: String,
});

const Realtor = mongoose.model("Realtor", RealtorSchema);
export default Realtor;
