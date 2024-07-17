# Tratamiento de la respuesta obtenida

La respuesta a los webhooks debe devolver un código de estado de éxito: `200`, `201`, `202`, `204`. Otros códigos de estado serán reconocidos como errores (incluyendo códigos de redireccionamiento) y se harán nuevos intentos de comunicación.

### Política de intentos

Se realizarán 3 intentos cada 30 minutos.
