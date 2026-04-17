const baseUrl = process.env.BASE_URL || "http://localhost:3003";

async function assertStatus(url, options, expectedStatus) {
  const response = await fetch(url, options);

  if (response.status !== expectedStatus) {
    throw new Error(`Expected ${expectedStatus}, received ${response.status}`);
  }

  return response;
}

async function run() {
  const notesResponse = await fetch(`${baseUrl}/notes`);
  const notes = await notesResponse.json();

  if (!Array.isArray(notes)) {
    throw new Error("GET /notes should return an array");
  }

  await assertStatus(`${baseUrl}/notes/1`, { method: "DELETE" }, 204);

  const afterDelete = await fetch(`${baseUrl}/notes`);
  const afterDeleteNotes = await afterDelete.json();

  if (afterDeleteNotes.some((note) => note.id === 1)) {
    throw new Error("Deleted note should not appear in GET /notes");
  }

  await assertStatus(`${baseUrl}/notes/999`, { method: "DELETE" }, 404);

  console.log("Agent task checks passed.");
}

run().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
