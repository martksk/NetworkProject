const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Show All Notes
router.get('/all', async (req, res) => {
  const notes = await Note.find();
  res.status(200).send(notes);
});

// Find Note by Title
router.get('/find/:title', async (req, res) => {
  try {
  const note = await Note.findOne({ title: req.params.title });
  res.status(200).send(note);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
