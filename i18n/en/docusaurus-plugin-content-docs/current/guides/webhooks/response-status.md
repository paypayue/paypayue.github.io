---
description: ""
---

# Response handling

The response to the webhooks should return a success status code: `200`, `201`, `202`, `204`. Other status codes will be considered errors (including redirect codes) and which wil trigger retries.

### Casos de erro específicos

If during the reception of the webhook you want to indicate specific error cases, so that they are resent in future communications, you will need to include those cases in the payload and respond with a status code other than success.

The numbering that follows `/payments` corresponds to the position of that payment in the webhook request.

```json
{
    "errors": [
        {
            "source": { "pointer": "/payments/0" }
        },
        {
            "source": { "pointer": "/payments/1" }
        }
    ]
}
```

### Attempt policy

There will be 3 attempts at an interval of 30 minutes.
