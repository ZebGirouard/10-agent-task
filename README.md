# 10 Agent Task

## Goal
Practice agentic coding by delegating one bounded backend task, reviewing the diff, and deciding whether it is actually correct.

## What You Are Practicing
- Reading a test before changing code
- Scoping an agent task tightly
- Reviewing whether the agent matched the existing code style
- Checking success and error cases for one route

## Start Here
1. Run `npm install`.
2. Run `npm test` to see the current failure.
3. Open `server.js` and notice the style of the existing `GET /notes` and `POST /notes` routes.
4. Give the agent the task in `AGENT_TASK.md`.
5. Review the diff and rerun the tests yourself.

The point is not blind trust. The point is scoped delegation inside a harness.

## Stretch Goals
- Add input validation tests.
- Ask the agent to refactor after the route works.
- Add a second bounded task once the first one passes.
