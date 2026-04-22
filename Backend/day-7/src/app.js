const express = require('express');
const notesModel = require('./models/notes.models.js');

const app = express();

app.use(express.json());

app.post('/notes', async (req, res) => {
  const { title, description } = req.body;
  const note = await notesModel.create({
    title,
    description,
  });

  return res.status(201).json({
    message: 'Note created successfully',
    id: note._id,
  });
});

app.get('/notes', async (req, res) => {
  const notes = await notesModel.find();

  res.status(200).json({
    message: 'Notes fetched successfully',
    notes,
  });
});

module.exports = app;
