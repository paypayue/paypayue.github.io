---
sidebar_position: 7
title: 'Cancelar pagamento'
description: ''
---

### cancelPayment

Método usado para cancelar um pagamento e formas de pagamento associadas ao pagamento.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação  |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |
| **requestPaymentCancel** | RequestCancelPayment | Detalhes do pagamento a cancelar |
| **- paymentId** | String | ID de pagamento/transação |
| **- hash** | String | Hash do pagamento |
| **- remarks** | String | Observações da operação |
| **- ignoreUnsupported** | Boolean | Indica se é para ignorar as formas de pagamento não suportadas |
| ~~**- idTransaction**~~ | ~~String~~ | ~~ID de pagamento/transação~~ |

#### Parâmetros da resposta

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **requestState** | ResponseCancelPayment | Contém a informação da integração |
| **- state** | Int | Resultado da operação/integração |
| **- code** | String | Código de erro/sucesso |
| **- message** | Int | Mensagem de erro/sucesso |
| **paymentOptionsResult** | ResponseCancelPaymentOption[] | Lista dos estados das formas de pagamento  |
| **- code** | String | Código de forma de pagamento ([Ver tabela](../resources#c%C3%B3digos-de-formas-de-pagamento)) |
| **- type** | String | Tipo da forma de pagamento ([Ver tabela](../resources#c%C3%B3digos-de-tipos-de-emiss%C3%A3o)) |
| **- status** | String | Estado da forma de pagamento |
| **- message** | String | Descrição do resultado da operação |
