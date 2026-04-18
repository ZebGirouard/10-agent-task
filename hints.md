The human still owns the result.

Start with `AGENT_TASK.md` and the tests. Then compare the new route against the existing routes in `server.js`:

- where does the route read input from?
- what status does it return on success?
- what JSON shape does it use on failure?

If the agent solves the test but breaks that pattern, it still needs review.
