const express = require('express');
const router = express.Router();

// In-memory storage for demo purposes (replace with DB storage)
let messages = [];

router.get('/', (req, res) => {
  res.json({ messages });
});

router.post('/', (req, res) => {
  const { sender, content } = req.body;
  const newMessage = { sender, content, timestamp: new Date() };
  messages.push(newMessage);

  res.json(newMessage);
});

module.exports = router;
