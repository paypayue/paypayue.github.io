---
sidebar_position: 2
---

# Authentication

The system checks the credentials of the integrated platform, in order to authenticate you must indicate the following elements in each request:

Headers de autenticação

```
Authorization: Basic <credentials>
PayPay-ClientId: <clientId>
```

- `<credentials>` - Username and password field encoded in base64. [More info](https://swagger.io/docs/specification/authentication/basic-authentication/)

  - Username: Platform Code
  - Password: Private Key

- `<clientId>` - TIN of the entity

#### Test credentials

Request credentials [@apoio](mailto:apoio@paypay.pt) indicating the reason/purpose of integration.

## Test Environment

You should test the integration of your application with PayPay, in the following addresses:

```
https://paypay.acin.pt/api
```

## Production Environment

```
https://paypay.pt/api
```
