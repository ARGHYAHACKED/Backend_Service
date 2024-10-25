const PDFDocument = require('pdfkit');
const fastcsv = require('fast-csv');

const generatePDFReport = (data, res) => {
  const doc = new PDFDocument();
  doc.pipe(res);
  doc.text('Campaign Report');
  data.forEach(item => doc.text(`${item.name}: ${item.budget} USD, ${item.leadsGenerated} leads`));
  doc.end();
};

const generateCSVReport = (data, res) => {
  const ws = fastcsv.write(data, { headers: true });
  ws.pipe(res);
};

module.exports = { generatePDFReport, generateCSVReport };
