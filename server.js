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

// Which existing route style should the delete route match?
// Where does the id come from?
// What should happen when the note is missing, and what should happen when it is found?

app.listen(port, () => {
  console.log(`Agent task API listening on http://localhost:${port}`);
});
