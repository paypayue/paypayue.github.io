---
sidebar_position: 4
title: 'Verificar o estado da transação/token'
description: ''
---

# checkWebPayment

Este método permite verificar o estado de uma determinada transação/token. Deverá ser invocado sempre que o URL de sucesso seja acedido.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação  |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |
| **request** | RequestEntity | Dados de integração da entidade  |
| **- token** | String | Token do pagamento |
| **- paymentId** | Int | Identificador do pagamento |
| ~~**- idTransaction**~~ | ~~Int~~ | ~~Identificador do pagamento~~ |

#### Parâmetros da resposta

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **- requestState** | ResponseIntegrationState | Contém a informação da integração |
| **- state** | Int | Resultado da pesquisa do pagamento |
| **- code** | String | Código de erro/sucesso |
| **- message** | Int | Mensagem de erro/sucesso |
| **paymentDate** | Int | Data do pagamento |
| **paid** | Int | Indica se o pagamento está pago   |
