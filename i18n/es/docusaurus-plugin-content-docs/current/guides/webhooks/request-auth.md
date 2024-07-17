# Autenticación de las solicitudes

El siguiente encabezado se envía en la solicitud HTTP para permitir verificar su integridad y autenticidad:

```
PayPay-Signature: hash=14d06cc11e0479c2ffe138d963462bc0f0ad94e8e006cf4f1f494c5e30bd1830,ts=1615826436
```

El encabezado consiste en la firma `hash` y el sello de tiempo `ts`. Para verificar que la solicitud es válida, el siguiente hash debe ser igual al `hash` del encabezado:

```
hash_hmac("SHA256", [payload] + [ts], [Password/Private Key])
```
