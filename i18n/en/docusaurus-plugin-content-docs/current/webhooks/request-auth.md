# Authentication of requests

The following header is sent in the HTTP request in order to allow verifying its integrity and authenticity:

```
PayPay-Signature: hash=14d06cc11e0479c2ffe138d963462bc0f0ad94e8e006cf4f1f494c5e30bd1830,ts=1615826436
```

The header consists of the signature `hash` and the timestamp `ts`. To verify that the request is valid, the following hash must match the `hash` of the header:

```
hash_hmac("SHA256", [payload] + [ts], [Password/Private Key])
```
