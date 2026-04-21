/* 
 - server create karna
 - server config karna
*/
const express = require("express");

const app = express(); // server create ho jata hai

app.use(express.json());

const notes = [
  // {
  //   title: "Title 1",
  //   description: "Description 1",
  // },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

// POST /notes
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  console.log(notes);
  res.send("notes created");
});

// GET /notes
app.get("/notes", (req, res) => {
  res.send(notes);
});

// DELETE /notes/:id
app.delete("/notes/:id", (req, res) => {
  delete notes[req.params.id];

  res.send("note deleted successfully");
});

// PATCH /notes/:id
app.patch("/notes/:id", (req, res) => {
  notes[req.params.id].title = req.body.title;
  notes[req.params.id].description = req.body.description;

  res.send("note updated successfully");
});

module.exports = app;
