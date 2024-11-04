---
sidebar_position: 2
title: 'Gerar referência ou link de pagamento'
description: ''
---

## createPaymentReference

Este método permite a geração de uma referência ou link de pagamento.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação  |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |
| **payment** | RequestReferenceDetails | Detalhes da referência de pagamento |
| **- amount** | Int | Montante do pagamento (em cêntimos, ex: 1000=10,00EUR) (obrigatório) |
| **- productCode** | String | Código do produto/serviço (opcional) |
| **- productDesc** | String | Descrição do produto/serviço (opcional) |
| **- validStartDate\*** | ISO8601 | Data de início da validade da referência. |
| **- validEndDate\*** | ISO8601 | Data limite de pagamento da referência.  |
| **- paymentOptions** | RequestPaymentOption[] | Lista de formas de pagamento a disponibilizar |
| **-- code** | String | Código de forma de pagamento ([Ver tabela](../resources#c%C3%B3digos-de-formas-de-pagamento)) |
| **-- type** | String | Tipo de emissão ([Ver tabela](../resources#c%C3%B3digos-de-tipos-de-emiss%C3%A3o)) |
| **- bankAccountCode\*\*** | String | Código que identifica o IBAN para o qual o pagamento deverá ser transferido. |

\* As datas devem estar no formato ISO8601 (ex: 2014-09-27T18&colon;30&colon;49-03&colon;00).

\*\* Os códigos podem ser consultados na área de dados bancários do backoffice.

#### Parâmetros da resposta

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **integrationState** | ResponseIntegrationState | Indica o sucesso do pedido |
| **paymentId** | Int | Identificador do pagamento |
| **amount** | Int | Montante do pagamento  |
| **atmEntity** | Int | Entidade multibanco |
| **reference** | String | Referência do pagamento |
| **hash** | String | Hash do pedido |
| **linkPayment** | String | Link da apresentação do pagamento na plataforma |
| **productCode** | String | Código do produto/serviço |
| **productDesc** | String | Descrição do produto/serviço |
| **err_code** | String | Código de erro |
| **err_msg** | String | Mensagem de erro |
| **validStartDate\*** | ISO8601 | Data de início da validade |
| **validEndDate\*** | ISO8601 | Data limite de pagamento |
| **paymentOptions** | RequestPaymentOption[] | Lista de formas de pagamento a disponibilizar |
| **- code** | String | Código de forma de pagamento ([Ver tabela](../resources#c%C3%B3digos-de-formas-de-pagamento)) |
| **- name** | String | Designação da forma de pagamento |
| **- iconUrl** | String | URL para o ícone |
| **- description** | String | Descrição do passo a seguir  |
| ~~**idPayment**~~ | ~~Int~~ | ~~Identificador do pagamento~~ |
| ~~**creditCardPayment**~~ | ~~Int~~ | ~~Indica se é possível o pagamento via cartão de crédito~~\*\* |
| ~~**atmPayment**~~ | ~~Int~~ | ~~Indica se é possível o pagamento via multibanco~~\*\*|
| ~~**mbwPayment**~~ | ~~Int~~ | ~~Indica se o pagamento é possível por MB WAY~~\*\*|

\* As datas no formato ISO8601 (ex: 2014-09-27T18&colon;30&colon;49-03&colon;00).

\*\* Verificar se a forma de pagamento existe nas paymentOptions.
