const express = require('express');
const router = express.Router();

let items = [];

// GET /items
router.get('/', (req, res) => {
  res.json(items);
});

// POST /items
router.post('/', (req, res) => {
  const item = req.body;
  items.push(item);
  res.json(item);
});

module.exports = router;