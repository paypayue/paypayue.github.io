# Tratamento da resposta obtida

A resposta aos webhooks deverá devolver um status code de sucesso: `200`, `201`, `202`, `204`. Outros status codes (incluindo códigos de redirecionamento) serão reconhecidos como erro e serão realizadas novas tentativas de comunicação.

### Política de tentativas:

Serão realizadas 3 tentativas num intervalo de 30 em 30 minutos.

