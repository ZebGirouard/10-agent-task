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

app.delete("/notes/:id", (request, response) => {
  const noteId = Number(request.params.id);
  const existingNote = notes.find((note) => note.id === noteId);

  if (!existingNote) {
    response.status(404).json({ error: "note not found" });
    return;
  }

  notes = notes.filter((note) => note.id !== noteId);
  response.status(204).end();
});

app.listen(port, () => {
  console.log(`Agent task API listening on http://localhost:${port}`);
});
