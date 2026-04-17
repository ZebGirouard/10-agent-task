# Agent Task

Add a `DELETE /notes/:id` endpoint to `server.js`.

## Constraints
- Keep the existing JSON response shape.
- Return `404` when the note does not exist.
- Return `204` on successful delete.
- Do not rewrite unrelated routes.

## Success Criteria
- `npm test` passes.
- Deleting an existing note removes it from later `GET /notes` responses.
- Deleting a missing note returns a `404` JSON error.
