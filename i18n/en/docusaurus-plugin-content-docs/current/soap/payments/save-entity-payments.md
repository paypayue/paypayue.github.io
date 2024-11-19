---
sidebar_position: 5
title: 'Pedidos com gama de referências'
description: ''
---

A gama de referências deve estar previamente configurada no PayPay só serão aceites referências que estejam dentro da gama configurada. Em ambiente de testes poderá ser solicitada a criação de uma gama de referências para testes.

### saveEntityPayments

Este método permite enviar referências multibanco emitidas localmente por uma aplicação com gama de referências configurada.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação  |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |
| **paymentReferences** | RequestPaymentReference[]  | Lista de referências de pagamento |
| **- referenceEntity** | String | Entidade multibanco (5 dígitos) |
| **- reference** | String | Número da referência (9 dígitos = 7 dígitos da gama + 2 checkdigits) |
| **- amount** | Int | Montante da referência (em cêntimos, ex: 1000=10,00EUR) |
| **- creationDate** | String | Data de emissão da referência |
| **- productCode** | String | Código do produto (opcional) |
| **- productDesc** | String | Descrição do produto (opcional) |
| **- validStartDate\*** | ISO8601 | Data de início da validade da referência |
| **- validEndDate\*** | ISO8601 | Data limite de pagamento da referência |

\*\* As datas de validade devem estar no formato ISO8601 (ex: 2014-09-27T18&colon;30&colon;49-03&colon;00).


#### Parâmetros da resposta

Nota: Quando existem referências processadas com erros é devolvida a lista de erros e a respetiva referência. ([Ver Lista](../resources#erros-de-resposta-saveentitypayments))

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **integrationState** | ResponseIntegrationState | Contém a informação da integração  |
| **- state** | Int | Estado do Resultado (sucesso=1, parcial=2, erro=0) |
| **- code** | String | Código de erro/sucesso |
| **- message** | Int | Mensagem de erro/sucesso |
| **paymentReferenceErrors** | ResponsePaymentReferenceError[] | Lista de detalhes de pagamentos |
| **- errorCode** | String | Código de erro  |
| **- errorMessage** | String | Mensagem do erro  |
| **- referenceEntity** | String | Entidade multibanco (5 dígitos) |
| **- reference** | String | Referência do pagamento |
