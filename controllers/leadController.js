// backend-service/controllers/leadController.js

const Lead = require('../models/leadModel'); // Adjust the path as necessary

// Function to create a new lead
const createLead = async (req, res) => {
  try {
    const leadData = req.body;
    const newLead = new Lead(leadData);
    await newLead.save();
    res.status(201).json({ message: 'Lead created successfully', lead: newLead });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ message: 'Error creating lead', error });
  }
};

module.exports = {
  createLead,
};
