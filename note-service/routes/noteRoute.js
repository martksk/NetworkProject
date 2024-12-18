const express = require("express");
const Note = require("../models/Note");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Note service");
});

router.post("/create", async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).send("Note created successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.body;
    await Note.findByIdAndDelete(id);
    res.status(200).send("Note deleted successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
