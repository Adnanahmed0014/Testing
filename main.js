const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let bills = [];

// GET /items endpoint to return a list of medical bills
app.get('/items', (req, res) => {
  res.status(200).json(bills);
});

// POST /items endpoint to create a new medical bill
app.post('/items', (req, res) => {
  const bill = {
    patientName: req.body.patientName,
    patientAddress: req.body.patientAddress,
    hospitalName: req.body.hospitalName,
    dateOfService: req.body.dateOfService,
    billAmount: req.body.billAmount,
  };

  bills.push(bill);
  res.status(201).json({ message: 'Bill added successfully' });
});

app.listen(port, () => {
  console.log(`Medical Bill Upload Service running on port ${port}`);
});

module.exports = app;