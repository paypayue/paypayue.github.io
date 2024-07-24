---
description: ""
---

# Tratamiento de la respuesta obtenida

La respuesta a los webhooks debe devolver un código de estado de éxito: `200`, `201`, `202`, `204`. Otros códigos de estado serán reconocidos como errores (incluyendo códigos de redireccionamiento) y se harán nuevos intentos de comunicación.

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

### Política de intentos

Se realizarán 3 intentos cada 30 minutos.
