---
sidebar_position: 2
title: 'Subscrever a um webhook'
description: ''
---

Este método permite subscrever a um webhook especificando o URL onde pretende receber os dados da ação pretendida.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação  |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |
| **webhook** | RequestWebhook | Intervalo de datas de pesquisa |
| **- action** | String | Ação do webhook ([Ver tabela](../webhooks/index.md#tipos-de-eventos-dispon%C3%ADveis)) |
| **- url** | String | URL completo do webhook (ex: https://paypay.acin.pt/) |


| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **webhookResponse** | ResponseWebhook | |
| **- integrationState** | ResponseIntegrationState | Contém a informação da integração  |
| **-- state** | Int | Resultado da pesquisa do pagamento |
| **-- code** | String | Código de erro/sucesso |
| **-- message** | Int | Mensagem de erro/sucesso |
