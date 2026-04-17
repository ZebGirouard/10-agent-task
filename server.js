import express from "express";

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());

let notes = [
  { id: 1, text: "Sketch the UI" },
  { id: 2, text: "Hook up the API" }
];

app.get("/notes", (request, response) => {
  response.json(notes);
});

app.post("/notes", (request, response) => {
  const { text } = request.body;

  if (!text) {
    response.status(400).json({ error: "text is required" });
    return;
  }

  const note = {
    id: notes.length + 1,
    text
  };

  notes = [...notes, note];
  response.status(201).json(note);
});

// Add DELETE /notes/:id here.

app.listen(port, () => {
  console.log(`Agent task API listening on http://localhost:${port}`);
});
