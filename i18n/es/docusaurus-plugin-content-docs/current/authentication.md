---
sidebar_position: 2
---

# Autenticación

El sistema comprueba las credenciales de la plataforma integrada. A fin de autenticar, deberá indicar los siguientes elementos en cada solicitud:

Headers de autenticação

```
Authorization: Basic <credentials>
PayPay-ClientId: <clientId>
```

- `<credentials>` - Campo de nombre de usuario y contraseña codificados en base64. [Más información](https://swagger.io/docs/specification/authentication/basic-authentication/)

  - Nombre de Usuario: Platform Code
  - Contraseña: Private Key

- `<clientId>` - NIF de la entidad

#### Credenciales para pruebas

Solicitar credenciales [@support](mailto:apoio@paypay.pt) indicando el motivo/propósito de la integración.

## Entorno de Pruebas

Deberá probar la integración de su aplicación con PayPay en las siguientes direcciones:

```
https://paypay.acin.pt/api
```

## Entorno de Producción

```
https://paypay.pt/api
```
