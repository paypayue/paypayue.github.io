---
sidebar_position: 3
---

# Consultar o estado da integração

### checkIntegrationState

O método checkIntegrationState permite verificar o estado da integração.

#### Parâmetros do pedido

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **entity** | RequestEntity | Dados de integração da entidade  |
| **- platformCode** | String | Código da plataforma |
| **- hash** | String | Hash de autenticação |
| **- lang** | String | Código de idioma |
| **- date** | String | Data de acesso |
| **- nif** | String | NIF da entidade |

#### Parâmetros da resposta

| Campo | Tipo | Descrição |
|:--- |:-----------|:-----|
| **requestState** | ResponseIntegrationState | Contém a informação da integração |
| **- state** | String | Estado da integração |
| **- code** | String | Código do estado de integração |
| **- message** | String | Mensagem do estado de integração |
