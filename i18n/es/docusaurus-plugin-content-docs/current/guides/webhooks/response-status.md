---
description: ""
---

# Tratamiento de la respuesta obtenida

La respuesta a los webhooks debe devolver un código de estado de éxito: `200`, `201`, `202`, `204`. Otros códigos de estado serán reconocidos como errores (incluyendo códigos de redireccionamiento) y se harán nuevos intentos de comunicación.

### Casos de erro específicos

Si durante la recepción del webhook desea indicar casos de error específicos, para que estos sean reenviados en las próximas comunicaciones, deberá incluir esos casos en el payload y responder con un código de estado diferente de los de éxito.

La numeración que sigue después de `/payments` corresponde a la posición de ese pago en la solicitud del webhook.

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
