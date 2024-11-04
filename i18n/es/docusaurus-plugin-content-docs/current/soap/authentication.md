---
sidebar_position: 2
---

# Autenticação
O sistema verifica as credencias da plataforma integrada, é fornecida uma chave secreta para permitir realizar pedidos ao webservice. Para cada pedido do webservice deve ser enviada a seguinte hash de autenticação:

```
sha256([Chave de encriptação] + [Data do pedido])
```
* Chave de encriptação - Chave privada da plataforma de integração.
* Data do pedido - Formato da data ISO8601 (ex: 2014-09-27T18&colon;30&colon;49-03&colon;00).

A hash ficará inválida após a data do pedido ultrapassar a data-hora atual em 90 minutos.

#### Credenciais de testes

Solicitar credenciais [@apoio](mailto:apoio@paypay.pt) indicando o motivo/finalidade da integração.

### Ambiente de Testes

Deverá testar a integração da sua aplicação com o PayPay, nos seguintes endereços:

WSDL

```
https://paypay.acin.pt/paypaybeta/paypayservices/paypayservices_c/wsdl
```

Servidor

```
https://paypay.acin.pt/paypaybeta/paypayservices/paypayservices_c/server
```

### Ambiente de Produção

WSDL

```
https://paypay.pt/paypay/paypayservices/paypayservices_c/wsdl
```

Servidor

```
https://paypay.pt/paypay/paypayservices/paypayservices_c/server
```
