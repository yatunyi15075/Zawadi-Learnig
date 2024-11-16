import SupportMessage from '../models/SupportMessage.js';

export const createSupportMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const supportMessage = await SupportMessage.create({ name, email, message });
    res.status(201).json(supportMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
