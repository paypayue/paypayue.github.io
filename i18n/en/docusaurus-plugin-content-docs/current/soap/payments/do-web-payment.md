---
sidebar_position: 3
title: 'Gerar pagamento com token (via redirect)'
description: ''
---

# Pedido de pagamento com token (via redirect)

De seguida apresentamos o processo de pagamento com redirecionamento para a página de pagamentos PayPay.
* O servidor do site/aplicação comunica com a PayPay com o objetivo de obter um token de pagamento para a(s) forma(s) de pagamento pretendidas;
* A PayPay responde com o ``redirectURL``, ``paymentId`` e ``token``:
  * O ``paymentId`` e ``token`` da resposta deverão ser guardados no servidor do site/aplicação;
  * De seguida o site/aplicação deverá redirecionar o cliente para o ``redirectURL`` da resposta;
* Em caso de sucesso, o cliente será redirecionado para o ``returnUrlSuccess`` ou em caso de cancelamento para o ``returnUrlCancel``;
* O servidor do site/aplicação deverá verificar se o ``?token=XYZ`` do url de retorno é válido e verificar o estado do token para confirmar se o pagamento foi confirmado. ([Ver checkWebPayment](../payments/check-web-payment));
* Se, por qualquer razão, o o cliente não regressar ao site/aplicação é recomendada a consulta ao estado do pagamento após um intervalo de referência de 30 minutos\*. ([Ver checkEntityPayments](../payments/query-payments#checkentitypayments))

\* A validade do pagamento é configurável por pedido no parâmetro ``validEndDate`` ou nas configurações da integração.
### doWebPayment

Gera um token de pagamento via WEB para as formas de pagamento pretendidas.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação  |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |
| **payment** | RequestCreditCardPayment | Dados relativos ao pagamento e redirecionamento |
| **- order** | RequestPaymentOrder | Informação do pagamento |
| **-- amount** | Int | Montante pretendido para a criação do pagamento (obrigatório) |
| **-- reference** | String | Referência do pagamento |
| **-- hash** | String | Hash do pagamento |
| **-- paymentId** | String | ID de pagamento |
| **-- productCode** | String | Código do produto/serviço (opcional) |
| **-- productDesc** | String | Descrição do produto/serviço (opcional) |
| **-- validStartDate\*\*\*\*\*** | ISO8601 | Data de início da validade da referência. |
| **-- validEndDate\*\*\*\*\*** | ISO8601 | Data limite de pagamento da referência.  |
| ~~**-- idTransaction**~~ | ~~String~~ | ~~ID de pagamento~~ |
| **- method\*\*\*\*** | String | Código da forma de pagamento que vai ser utilizada. Ex: "MB" ou separado por vírgula "MB,CC,MW". |
| **- returnUrlSuccess** | String | URL de redirecionamento caso o cliente realize o pagamento com sucesso |
| **- returnUrlCancel** | String | URL de redirecionamento em caso de cancelamento pelo cliente |
| **- returnUrlBack** | String | URL de redirecionamento em caso de retrocedimento pelo cliente |
| **- bankAccountCode\*\*\*\*\*\*** | String | Código que identifica o IBAN para o qual o pagamento deverá ser transferido. |
| **- buyer** | RequestBuyerInfo | Informação do cliente |
| **-- firstName** | String | Nome do cliente |
| **-- lastName** | String | Apelido do cliente |
| **-- customerId** | String | Id do cliente |
| **-- email** | String | Email do cliente |
| **-- phoneNumber** | String | Telefone do cliente |
| **- billingAddress** | RequestBillingAddress | Endereço de faturação |
| **-- country** | String | País (Formato: ISO 3166-1) |
| **-- state** | String | Código do Estado/Distrito (Formato: ISO 3166-2) |
| **-- stateName** | String | Nome do Estado/Distrito |
| **-- city** | String | Nome da cidade |
| **-- street1** | String | Morada (Linha 1) |
| **-- street2** | String | Morada (Linha 2) |
| **-- postCode** | String | Código Postal |
 **- shippingAddress** | RequestShippingAddress | Endereço de expedição |
| **-- country** | String | País (Formato: ISO 3166-1) |
| **-- state** | String | Código do Estado/Distrito (Formato: ISO 3166-2) |
| **-- stateName** | String | Nome do Estado/Distrito |
| **-- city** | String | Nome da cidade |
| **-- street1** | String | Morada (Linha 1) |
| **-- street2** | String | Morada (Linha 2) |
| **-- postCode** | String | Código Postal |

\* Deverá ser enviado quando se pretende criar um pagamento.

\*\* Estes dados deverão ser enviados para efetuar um pagamento por cartão de crédito de pagamento criados através de outros webservice, não descritos neste documento.

\*\*\* Neste caso é obrigatório especificar o montante (amount) do pagamento. Caso o montante não coincida com o montante do pagamento com paymentId será criado um novo pagamento.

\*\*\*\* Caso não seja especificado por defeito é escolhido o código CC - Cartão de Crédito.

\*\*\*\*\* As datas de validade devem estar no formato ISO8601 (ex: 2014-09-27T18&colon;30&colon;49-03&colon;00).

\*\*\*\*\*\* Os códigos de IBAN podem ser consultados na área de dados bancários do backoffice.

#### Parâmetros da resposta

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **requestState** | ResponseIntegrationState | Contém a informação da integração |
| **- state** | Int | Resultado da pesquisa do pagamento |
| **- code** | String | Código da mensagem |
| **- message** | String | Mensagem de erro/sucesso |
| **redirectUrl** | String | Endereço de redirecionamento para a página de pagamento PayPay |
| **paymentId** | Int | Lista de detalhes de pagamentos |
| **token** | String | Lista de detalhes de pagamentos |
| ~~**url**~~ | ~~String~~ | ~~Endereço de redirecionamento para a página de pagamentos da PayPay~~ |
| ~~**idTransaction**~~ | ~~Int~~ | ~~Lista de detalhes de pagamentos~~ |
