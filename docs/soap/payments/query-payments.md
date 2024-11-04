---
sidebar_position: 6
title: 'Métodos para consultar pagamentos'
description: ''
---

### checkEntityPayments

Permite verificar os detalhes de uma lista de pagamentos ou referências.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação  |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |
| **requestPayments** | RequestEntityPayments | Pedido de pagamentos a verificar |
| **- payments** | RequestReferenceDetails[] | Lista de referências de pagamentos |
| **-- reference** | String | Referência do pagamento |
| **-- paymentId** | Int | Id do pagamento  |

#### Parâmetros da resposta

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **response** | ResponseEntityPaymentsDetails | Contém a informação da referência |
| **- state** | ResponseIntegrationState | Informação do estado da integração |
| **- payments** | PaymentDetails[] | Lista de detalhes de pagamentos |
| **-- state** | Int | Resultado da pesquisa do pagamento |
| **-- code** | String | Código da mensagem |
| **-- message** | Int | Mensagem de erro/sucesso |
| **-- reference** | String | Referência do pagamento |
| **-- paymentState** | Int | Estado do pagamento (0. Pendente 1. Pago) |
| **-- paymentStateId** | Int | Identificador do estado do pagamento  |
| **-- paymentBlocked** | Int | Indica se o pagamento está bloqueado  |
| **-- paymentCancelled** | Int | Indica se o pagamento foi cancelado |
| **-- paymentDate** | String | Data de pagamento |
| **-- paymentMode** | String | Modo de pagamento<br/>1. Cartão de crédito;<br/>2. Multibanco;<br/>4. MB WAY. |
| **-- paymentId** | Int | Id do pagamento  |
| **-- paymentAmount** | Int | Montante do pagamento (em cêntimos, ex: 1000=10,00EUR)  |
| **-- paymentFee** | PaymentFee | Valores da comissão |
| **--- netAmount** | Float | Valor líquido |
| **--- taxAmount** | Float | Valores de imposto IVA |
| **--- invoiceDetails** | InvoiceDetails | Detalhes da fatura |
| **---- invoiceNumber** | String | Número da fatura |
| **---- invoiceDate** | String | Data de faturação |
| **-- transferDetails** | TransferDetails | Detalhes da transferência |
| **--- payerReference** | String | Referência de ordenante |
| **--- transferDate** | String | Data da transferência |
| **--- bankAccountIban** | String | IBAN da conta destino |
| **-- paymentRefunds** | paymentRefund[] | Lista de devoluções do pagamento |
| **--- paymentId** | Int | Id do pagamento-devolução |
| **--- amount** | Int | Valor devolvido |
| **--- refundDate** | String | Data da devolução |

### getEntityPayments

Este método permite pesquisar pagamentos por data da última atualização. Os pagamentos são atualizados quando ocorre algum dos seguintes eventos:
* confirmado;
* cancelado;
* devolvido (parcial ou total);
* transferido;
* faturado.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação  |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |
| **dateTimeInterval** | RequestInterval | Intervalo de datas de pesquisa |
| **- startDate**\*\* | ISO8601 | Data de início da pesquisa |
| **- endDate**\*\* | ISO8601 | Data de fim da pesquisa |

\*\* As datas de pesquisa devem estar no formato ISO8601 (ex: 2014-09-27T18&colon;30&colon;49-03&colon;00).

#### Parâmetros da resposta

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **response** | ResponseEntityPaymentsDetails | Contém a informação da referência |
| **- state** | ResponseIntegrationState | Informação do estado da integração |
| **- payments** | ResponsePayment[] | Lista de detalhes de pagamentos |
| **-- paymentId** | Int | Id do pagamento  |
| **-- referenceEntity** | String | Entidade multibanco (5 dígitos) |
| **-- reference** | String | Referência do pagamento |
| **-- paymentMethodCode** | String | Código da forma de pagamento utilizada ([Ver tabela](../resources#c%C3%B3digos-de-formas-de-pagamento)) |
| **-- paymentCancelled** | Boolean | Indica se o pagamento está cancelado |
| **-- paymentDate** | String | Data de pagamento |
| **-- paymentAmount** | Int | Montante do pagamento (em cêntimos, ex: 1000=10,00EUR)  |
| **-- productCode** | String | Código do produto (opcional) |
| **-- productDesc** | String | Descrição do produto (opcional) |
| **-- validStartDate\*** | ISO8601 | Data de início da validade da referência. |
| **-- validEndDate\*** | ISO8601 | Data limite de pagamento da referência.  |
| **-- paymentFee** | PaymentFee | Valores da comissão |
| **--- netAmount** | Float | Valor líquido |
| **--- taxAmount** | Float | Valores de imposto IVA |
| **--- invoiceDetails** | InvoiceDetails | Detalhes da fatura |
| **---- invoiceNumber** | String | Número da fatura |
| **---- invoiceDate** | String | Data de faturação |
| **-- transferDetails** | TransferDetails | Detalhes da transferência |
| **--- payerReference** | String | Referência de ordenante |
| **--- transferDate** | String | Data da transferência |
| **--- bankAccountIban** | String | IBAN da conta destino |
| **-- paymentRefunds** | paymentRefund[] | Lista de devoluções do pagamento |
| **--- paymentId** | Int | Id do pagamento-devolução |
| **--- amount** | Int | Valor devolvido |
| **--- refundDate** | String | Data da devolução |
