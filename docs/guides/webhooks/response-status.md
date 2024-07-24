---
description: ""
---

# Tratamento da resposta obtida

A resposta aos webhooks deverá devolver um status code de sucesso: `200`, `201`, `202`, `204`. Outros status codes (incluindo códigos de redirecionamento) serão reconhecidos como erro e serão realizadas novas tentativas de comunicação.

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

### Política de tentativas:

Serão realizadas 3 tentativas num intervalo de 30 em 30 minutos.
