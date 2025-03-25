import Buyer from "../models/Buyer.js";

export const createBuyer = async (req, res) => {
  try {
    const buyer = await Buyer.create(req.body);
    res.status(201).json(buyer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getBuyers = async (req, res) => {
  try {
    const buyers = await Buyer.find();
    res.status(200).json(buyers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
