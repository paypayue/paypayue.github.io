# Response handling

The response to the webhooks should return a success status code: `200`, `201`, `202`, `204`. Other status codes will be considered errors (including redirect codes) and which wil trigger retries.

### Attempt policy

There will be 3 attempts at an interval of 30 minutes.
