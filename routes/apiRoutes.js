const express = require('express');
const router = express.Router();
const { fetchLeads, fetchCampaigns } = require('../services/dataService'); // Ensure this path is correct
const { generatePDFReport, generateCSVReport } = require('../controllers/reportController');
const sendAlert = require('../controllers/emailController');
const Lead = require('../models/leadModel'); // Import Lead model
const Campaign = require('../models/campaignModel'); // Import Campaign model

// Route to fetch all leads
router.get('/leads', (req, res) => {
  const leads = fetchLeads();
  res.json(leads);
});

// Route to fetch all campaigns
router.get('/campaigns', (req, res) => {
  const campaigns = fetchCampaigns();
  res.json(campaigns);
});

// Route to generate PDF report
router.get('/report/pdf', (req, res) => {
  const campaigns = fetchCampaigns();
  generatePDFReport(campaigns, res);
});

// Route to generate CSV report
router.get('/report/csv', (req, res) => {
  const campaigns = fetchCampaigns();
  generateCSVReport(campaigns, res);
});

// Route to trigger an alert
router.post('/alert', (req, res) => {
  const condition = req.body.condition;
  const message = 'Your custom alert message';
  sendAlert(condition, message);
  res.send('Alert triggered');
});

// Route to create a new lead
router.post('/leads', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    const savedLead = await newLead.save();
    res.status(201).json({
      id: savedLead._id,
      name: savedLead.name,
      email: savedLead.email,
      phone: savedLead.phone,
      status: savedLead.status,
      createdAt: savedLead.createdAt
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Failed to create lead' });
  }
});

router.post('/campaigns', async (req, res) => {
  console.log('Received request body:', req.body); // Log the request body
  try {
    const newCampaign = new Campaign(req.body);
    const savedCampaign = await newCampaign.save();
    console.log(newCampaign);
    
    // Customize the response to include relevant fields
    res.status(201).json({
      id: savedCampaign._id,
      title: savedCampaign.title,
      description: savedCampaign.description,
      startDate: savedCampaign.startDate,
      endDate: savedCampaign.endDate,
      status: savedCampaign.status,
      createdAt: savedCampaign.createdAt
    });
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({ error: 'Failed to create campaign' });
  }
});




module.exports = router;
