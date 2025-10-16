---
sidebar_position: 4
description: 'Enviar pedido de devolução para um terminal Cloud'
title: 'Enviar pedido de devolução'
---

:::info Estado do pagamento
O pagamento só pode ser devolvido se tiver no estado **Confirmado**.
:::

Pode consultar o estado do pagamento no endpoint:
```http
GET /payments/{id}
```

## Tipos de Devolução

- Devolução total
- Devolução parcial

import ClickShowIframe from "../../../../src/utils/ClickShowIframe";

<button className="btn-api btn-api--float-right"
	onClick={() =>
		ClickShowIframe({
			idMenuOption: "terminals",
			idOption: "terminals/post/terminals/{uuid}/refunds/{paymentId}"
		})
	}
>
	<span>Consultar API &nbsp;&nbsp;&nbsp;{'>'}</span>
</button>

### 1. Iniciação da Devolução (via API)

O seu sistema inicia a devolução remotamente através da API PayPay:

1. O sistema envia o pedido para API PayPay:

##### Endpoint

```http
POST /terminals/{uuid}/refunds/{paymentId}
```

##### Exemplo básico
```json
{
  "amount": 100,
}
```

##### Parâmetros

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `uuid` | string | ✅ Sim | UUID do terminal para o qual irá ser enviado o pedido de pagamento |
| `paymentId` | string | ✅ Sim | ID do pagamento PayPay que deseja devolver |
| `amount` | integer | ✅ Sim | Montante que deseja devolver |


1. API PayPay comunica com o terminal de forma **assíncrona**;
2. Terminal recebe e apresenta o valor automaticamente ao operador;

:::info Tempo de espera
O terminal aguarda **1 minuto** pela apresentação do cartão.
:::

4. API PayPay devolve a resposta do sucesso ou não do pedido assíncrono, enquanto o terminal aguarda pela apresentação do cartão.

##### Resposta da API

```json
{
    "date": "2025-09-01T12:46:22+01:00",
    "success": true,
    "data": {
        "id": "3",
        "clientId": "502056800",
        "type": "refund",
        "amount": 50,
        "initialPaymentId": "1",
        "stateDetails": {
            "state": "pending_confirmation",
            "createdAt": "2025-09-01T12:46:22+01:00"
        },
        "paymentMethod": {
            "code": "CC",
            "type": "TPA",
            "details": {
                "brand": "VISA",
                "last4Digits": "7193"
            }
        },
        "availableMethods": [
            {
                "code": "CC",
                "type": "TPA",
                "name": "Credit Debit card Physical TPA"
            }
        ],
        "bankAccount": {
            "code": "O9uFVmSZ",
            "bankName": "Banco",
            "last4digits": "8513"
        },
        "createdAt": "2025-09-01T12:46:22+01:00",
        "updatedAt": "2025-09-01T12:46:22+01:00"
    }
}
```

## Estrutura da Resposta

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | string | ID da devolução PayPay |
| `clientId` | string | NIF da entidade a que o pagamento ficou associado |
| `type` | string | Tipo de operação |
| `stateDetails.state` | string | Estado do pagamento |
| `stateDetails.createdAt` | datetime | Date do estado |
| `paymentMethod` | object | Método de pagamento do pagamento original |
| `availableMethods` | object | Formas de pagamento disponíveis para a devolução |
| `bankAccount` | object | Identificação do banco que irá receber os fundos |
| `createdAt` | datetime | Data de criação do registo |
| `updatedAt` | datetime | Data da última atualização |


## Fluxo de devolução no terminal

Após o pedido de devolução ser enviado pela API, o processo no terminal segue estes passos:

### 2. Apresentação do Cartão

O cliente apresenta o mesmo cartão usado no pagamento original:

1. Terminal apresenta o valor da devolução ao operador;
2. Cliente apresenta o cartão através de um dos métodos:
   - **Contactless**: Aproxima cartão ou dispositivo móvel.
   - **Chip**: Insere cartão no terminal.
   - **Banda magnética**: Passa o cartão.
3. Terminal valida se o cartão corresponde ao pagamento original.

:::warning Validação do Cartão
O cartão deve ser o **mesmo utilizado no pagamento original**. Se for apresentado um cartão diferente, a devolução será recusada.
:::

### 3. Autenticação

Dependendo do valor e tipo de cartão, pode ser necessária autenticação:

1. Dados do cartão são lidos e validados pelo terminal;
2. Sistema verifica se autenticação é necessária:
   - **Se sim**: Cliente introduz PIN.
     - Se PIN correto: Prossegue para processamento.
     - Se PIN incorreto: Nova tentativa ou cancelamento (máx. 3 tentativas).
   - **Se não**: Processamento direto para autorização.

**Tipos de autenticação:**
- **PIN**: Normalmente requerido para devoluções.
- **Sem autenticação**: Em alguns casos de valores reduzidos.

### 4. Processamento e Confirmação

O terminal comunica com a rede de pagamentos para processar a devolução:

1. Terminal valida dados e envia pedido para rede de pagamento;
2. Rede contacta banco emissor para processar devolução;
3. Resposta é enviada de volta ao terminal:
   - **Aprovada**: Devolução processada com sucesso.
   - **Recusada**: Mensagem de erro apresentada.

### 5. Notificação ao Sistema

Após a confirmação, o seu sistema é notificado:

1. A Transação é sincronizada com backoffice PayPay em tempo real;
2. A PayPay notifica via **Webhook** o seu sistema com detalhes da devolução.

:::tip Webhook Essencial
Configure webhooks para receber notificações automáticas do resultado da devolução. A resposta da API indica apenas que o pedido foi enviado ao terminal, não o resultado final.
:::
