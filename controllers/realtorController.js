import Realtor from "../models/Realtor.js";

export const createRealtor = async (req, res) => {
  try {
    const realtor = await Realtor.create(req.body);
    res.status(201).json(realtor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getRealtors = async (req, res) => {
  try {
    const realtors = await Realtor.find();
    res.status(200).json(realtors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
