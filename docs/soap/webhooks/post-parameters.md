---
sidebar_position: 3
title: 'Parâmetros do pedido POST'
description: ''
---

| Ação | Tipo | Descrição
|:--- |:-----------|:-----|
| **hookAction** | String | A designação da ação desencadeada |
| **hookDate** | String | A data do pedido |
| **hookHash** | String | A hash do pedido |
| **payments** | Array | Lista de pagamentos encontrados |
| **- paymentId** | Int | Id do pagamento  |
| **- referenceEntity** | String | Entidade multibanco (5 dígitos) |
| **- reference** | String | Referência do pagamento |
| **- paymentMethodCode** | String | Código da forma de pagamento utilizada ([Ver tabela](../resources#c%C3%B3digos-de-formas-de-pagamento)) |
| **- paymentCancelled** | Boolean | Indica se o pagamento está cancelado |
| **- paymentDate** | String | Data de pagamento |
| **- paymentAmount** | Int | Montante do pagamento (em cêntimos, ex: 1000=10,00EUR)  |
| **- productCode** | String | Código do produto (opcional) |
| **- productDesc** | String | Descrição do produto (opcional) |
| **- paymentNetFee** | Float | Valor líquido |
| **- paymentTaxFee** | Float | Valores de imposto IVA |
| **- originalPaymentId** | Int | Id do pagamento origem (ex: caso seja devolução corresponde ao pagamento inicial) |
| **- additionalData** | Array | Lista de campos adicionais associados ao pagamento |
| **-- key** | String | Chave do campo adicional |
| **-- value** | String | Valor do campo adicional |
| **-- type** | String | Tipo de dado do campo adicional |
