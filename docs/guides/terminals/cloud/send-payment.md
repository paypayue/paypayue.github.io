---
sidebar_position: 4
description: 'Enviar pedido de pagamento para um terminal Cloud'
title: 'Enviar pedido de pagamento'
---

## Fluxo de Pagamento

O processo de pagamento com o terminal cloud envolve comunicação entre o seu sistema e o terminal:

import ClickShowIframe from "../../../../src/utils/ClickShowIframe";

<button className="btn-api btn-api--float-right"
	onClick={() =>
		ClickShowIframe({
			idMenuOption: "terminals",
			idOption: "terminals/post/terminals/{uuid}"
		})
	}
>
	<span>Consultar API &nbsp;&nbsp;&nbsp;{'>'}</span>
</button>

### 1. Iniciação do Pagamento (via API)

O seu sistema inicia o pagamento remotamente através da API PayPay:

1. O sistema envia o pedido para API PayPay:

##### Endpoint

```http
POST /terminals/{uuid}/payments
```

##### Exemplo básico
```json
{
  "amount": 100,
  "code": "sale-code",
  "summary": "sale-description"
}
```

##### Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `uuid` | string | ✅ Sim | UUID do terminal para o qual irá ser enviado o pedido de pagamento |
| `amount` | integer | ✅ Sim | Montante |
| `code` | string | ❌ Não | Código indicado pelo comerciante, por exemplo, código da encomenda do sistema |
| `summary` | string | ❌ Não | Descrição indicado pelo comerciante, por exemplo, descrição da encomenda do sistema |


2. API PayPay comunica com o terminal de forma **assíncrona**;
3. Terminal recebe e apresenta o valor automaticamente ao operador;

:::info Tempo de espera
O terminal aguarda **1 minuto** pela apresentação do cartão.
:::

4. API PayPay devolve a resposta do sucesso ou não do pedido assíncrono, enquanto o terminal aguarda pela apresentação do cartão.

##### Resposta da API

```json
{
  "date": "2025-09-01T13:06:22+01:00",
  "success": true,
  "data": {
      "id": "1",
      "clientId": "502056800",
      "type": "payment",
      "amount": 100,
      "stateDetails": {
          "state": "pending_confirmation",
          "createdAt": "2025-09-01T13:06:22+01:00"
      },
      "paymentMethod": {
          "code": "CC",
          "type": "TPA"
      },
      "code": "order-code",
      "summary": "product-description",
      "availableMethods": [
        {
          "code": "CC",
          "type": "TPA",
          "name": "Credit\/Debit card Physical TPA"
        }
      ],
      "bankAccount": {
        "code": "O9uFVmSZ",
        "bankName": "Banco",
        "last4digits": "8513"
      },
      "createdAt": "2025-09-01T13:06:22+01:00",
      "updatedAt": "2025-09-01T13:06:22+01:00"
  }
}
```

## Estrutura da Resposta

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | string | ID do pagamento PayPay |
| `clientId` | string | NIF da entidade a que o pagamento ficou associado |
| `type` | string | Tipo de operação |
| `stateDetails.state` | string | Estado do pagamento |
| `stateDetails.createdAt` | datetime | Date do estado |
| `paymentMethod` | object | Método de pagamento escolhido para pagamento |
| `code` | string | Código indicado pelo comerciante |
| `summary` | string | Descrição indicado pelo comerciante |
| `availableMethods` | object | Formas de pagamento disponíveis para o pagamento|
| `bankAccount` | object | Identificação do banco que irá receber os fundos |
| `createdAt` | datetime | Data de criação do registo |
| `updatedAt` | datetime | Data da última atualização |

:::info Estrutura da Resposta
A estrutura da resposta varia consoante os parâmetros enviados no pedido. Por exemplo se enviar informação do cliente (`customer`) a mesma é retornada também.
:::

5. [Fluxo de Pagamento no terminal](/docs/guides/terminals#fluxo-de-pagamento-terminal)
