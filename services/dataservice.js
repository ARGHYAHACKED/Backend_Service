// services/dataService.js
const leads = [
    { name: 'John Doe', email: 'john@example.com', phone: '1234567890', status: 'New' },
    { name: 'Jane Doe', email: 'jane@example.com', phone: '0987654321', status: 'Contacted' }
  ];
  
  const campaigns = [
    { name: 'Winter Campaign', budget: 5000, leadsGenerated: 20, status: 'Active' },
    { name: 'Summer Campaign', budget: 10000, leadsGenerated: 100, status: 'Completed' }
  ];
  
  const fetchLeads = () => leads;
  const fetchCampaigns = () => campaigns;
  
  module.exports = { fetchLeads, fetchCampaigns };
  