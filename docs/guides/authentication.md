---
sidebar_position: 2
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

#### Credenciais de testes

Solicitar credenciais [@apoio](mailto:apoio@paypay.pt) indicando o motivo/finalidade da integração.

### Ambiente de Testes

Deverá testar a integração da sua aplicação com o PayPay, nos seguintes endereços:

```
https://paypay.acin.pt/api
```

### Ambiente de Produção

```
https://paypay.pt/api
```
