# Autenticação dos pedidos

O seguinte header é enviado no pedido HTTP de forma a permitir verificar a sua integridade e autenticidade:

```
PayPay-Signature: hash=14d06cc11e0479c2ffe138d963462bc0f0ad94e8e006cf4f1f494c5e30bd1830,ts=1615826436
```

O header é composto pela assinatura `hash` e o timestamp `ts`. Para verificar se o pedido é válido a seguinte hash deverá ser igual à `hash` do header:

```
hash_hmac("SHA256", [payload] + [ts], [Password/Private Key])
```
