---
sidebar_position: 4
---

# Autenticação

O sistema verifica as credencias da plataforma integrada, de forma a autenticar deverá indicar os seguintes elementos em cada pedido:

Headers de autenticação

```
Authorization: Basic <credentials>
PayPay-ClientId: <clientId>
```

- `<credentials>` - Campo username e password codificado em base64. [Mais info](https://swagger.io/docs/specification/authentication/basic-authentication/)

  - Username: Platform Code
  - Password: Private Key

- `<clientId>` - NIF da entidade
