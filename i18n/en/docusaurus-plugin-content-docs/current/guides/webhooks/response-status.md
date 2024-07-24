---
description: ""
---

# Response handling

The response to the webhooks should return a success status code: `200`, `201`, `202`, `204`. Other status codes will be considered errors (including redirect codes) and which wil trigger retries.

### Casos de erro específicos

Se durante a receção do webhook pretender indicar casos de erro específicos, para que estes voltem a ser reenviados nas próximas comunicações, terá que incluir no payload esses casos e responder com o status code diferente dos de sucesso.

A numeração que se segue após o `/payments` corresponde a posição desse pagamento no pedido do webhook.

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
