const express = require('express');
const cors = require('cors');
const { Note } = require('./models/user.model.js');
const path = require('node:path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Server started running',
  });
});

app.post('/api/notes', async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(401).json({
      message: 'Title in required',
    });
  }

  const note = await Note.create({
    title,
    description,
  });

  return res.status(201).json({
    message: 'Note created successfully',
    id: note._id,
  });
});

app.get('/api/notes', async (req, res) => {
  const notes = await Note.find();

  return res.status(200).json({
    message: 'Notes fetched successfully',
    notes,
  });
});

app.delete('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id);
  return res.status(200).json({
    message: 'Note deleted successfully',
  });
});

app.patch('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  const updatedNote = await Note.findByIdAndUpdate(id, { description });
  return res.status(200).json({
    message: 'Note updated successfully',
    id: updatedNote._id,
  });
});

app.use('*name', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

module.exports = app;
