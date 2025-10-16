---
sidebar_position: 3
title: 'Consultar dados do terminal'
description: 'Consulte informações detalhadas de um terminal específico através do seu UUID'
---

import ClickShowIframe from "../../../src/utils/ClickShowIframe";

<button className="btn-api btn-api--float-right"
	onClick={() =>
		ClickShowIframe({
			idMenuOption: "terminals",
			idOption: "terminals/get/terminals/{uuid}"
		})
	}
>
	<span>Consultar API &nbsp;&nbsp;&nbsp;{'>'}</span>
</button>

Consulte informações detalhadas de um terminal específico através do seu UUID.

## Endpoint

```http
GET /api/v1/terminals/{uuid}
```

## Parâmetro

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `uuid` | string | ✅ Sim | UUID do terminal a consultar |

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### Exemplo

<Tabs>
<TabItem value="pedido-1" label="Pedido">

```js
GET /terminals/3df21709-b2f5-4ec6-93f9-c5855e0da879
```

</TabItem>
<TabItem value="resposta-1" label="Resposta">

```json
{
 "date": "2021-12-07T18:01:19+00:00",
 "success": true,
 "data": {
    "uuid": "3df21709-b2f5-4ec6-93f9-c5855e0da879",
    "terminalId": "806030356",
    "name": "name",
    "model": "model",
    "processor": "processor",
    "supplier": "supplier",
    "features": {
      "allowRemoteTransactions": true,
      "allowGenerateQrCode": false,
      "allowRealTimeTransactionSinchronization": true
    },
    "createdAt": "2025-08-21T09:46:39+01:00",
    "updatedAt": "2025-08-22T16:16:56+01:00"
  }
}
```

</TabItem>
</Tabs>

## Estrutura da Resposta

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `uuid` | string | Identificador único do terminal |
| `terminalId` | string | Id do terminal |
| `name` | string | Nome do terminal |
| `model` | string | Modelo do terminal |
| `processor` | string | Nome do processador das transações |
| `supplier` | datetime | Nome do fornecedor do terminal |
| `allowRemoteTransactions` | boolean | Indica se o terminal aceita transações remotas (Suportado apenas em terminais cloud) |
| `allowGenerateQrCode` | boolean | Indica se o terminal tem a possibilidade de gerar QR Codes |
| `allowRealTimeTransactionSinchronization` | boolean | Indica se o terminal sincroniza as transações em realtime com o backoffice PayPay |
| `createdAt` | datetime | Data de criação do registo |
| `updatedAt` | datetime | Data da última atualização |

:::important Terminais Cloud
Os terminais que têm a funcionalidade **_allowRemoteTransactions_** ativa, são do tipo Cloud.
:::

## Próximos Passos

Com acesso aos detalhes do terminal, pode:

- **[Enviar Pedido de Pagamento](/docs/guides/terminals/cloud/create-payment)** - Enviar pedido de pagamento para terminal cloud.
- **[Enviar Pedido de Reembolso](/docs/guides/terminals/cloud/create-refund)** - Enviar pedido de devolução para terminal cloud.
- **[Configurar Webhooks](/docs/guides/terminals/webhooks/)** - Receber notificações em tempo real.
