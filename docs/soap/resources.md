---
sidebar_position: 6
title: Recursos
---

### [GitHub](https://github.com/paypayue/paypay-soap)

### Códigos de formas de pagamento

| Código | Descrição  |
|:--- |:-----------|
| **MB** | Multibanco |
| **CC** | Cartão de crédito |
| **MW** | MB WAY |

### Códigos de tipos de emissão

| Código | Descrição  |
|:--- |:-----------|
| **DEFAULT** | Emite de acordo com a integração no backoffice |
| **NORMAL** | Referência MB tradicional (apenas disponível para MB) |
| **REALTIME** | Referência MB Real-time (apenas disponível para MB) |

### Códigos de Erro

#### Erros de configuração da entidade

| Código | Não registada/credenciais inválidas  |
|:--- |:-----------|
| **00** | Não registada/credenciais inválidas |
| **01** | Registada sem integração |
| **02** | Registada com integração e referências (apta) |
| **03** | Registada com integração e sem referências |
| **04** | Registada com integração e sem gama configurada  |
| **05** | Registada com integração mas sem formas de pagamento configuradas  |

#### Erros de resposta saveEntityPayments

| Código | Mensagem de erro |
|:--- |:-----------|
| **0011** | Os dados referência não são válidos |
| **0012** | A referência está fora das gamas definidas para a entidade |
| **0013** | A referência foi processada anteriormente |
| **0014** | Parâmetros em falta |
| **0015** | Parâmetros inválidos |
| **0016** | Ocorreu um erro ao tentar processar a referência |
| **0017** | Datas de validade inválidas |

#### Erros de resposta doWebPayment

| Código | Mensagem de erro |
|:--- |:-----------|
| **0031** | Não foi possível processar o seu pedido |
| **0032** | Campos em falta \{campos\} |
| **0033** | Dados inválidos |
| **0034** | A referência foi processada anteriormente |
| **0035** | Montante inválido |
| **0036** | Datas de validade inválidas |
| **0037** | Formas de pagamento indisponíveis |
| **0038** | Código de dados bancários inválido |
| **0039** | Data limite de contrato excedida |
| **0040** | Montante do plafond excedido |


#### Erros de resposta checkWebPayment

| Código | Mensagem de erro |
|:--- |:-----------|
| **0041** | Campos em falta \{campos\} |
| **0042** | Não foi encontrado um pagamento com os dados fornecidos |

#### Erros de resposta subscribeToWebhook

| Código | Mensagem de erro |
|:--- |:-----------|
| **0051** | O parâmetro action não é válido ou não existe |
| **0052** | O URL não é válido, deve ser especificado o endereço completo |

#### Erros de resposta createPaymentReference

| Código | Mensagem de erro |
|:---- |:-----------|
| **0060** | Não foi possível processar o seu pedido |
| **0061** | Montante inválido |
| **0062** | Parâmetros em falta |
| **0063** | Parâmetros inválidos
| **0064** | Formas de pagamento indisponíveis |
| **0038** | Código de dados bancários inválido |
| **0039** | Data limite de contrato excedida |
| **0040** | Montante do plafond excedido |

#### Erros de resposta cancelPayment

| Código | Mensagem de erro |
|:---- |:-----------|
| **0031** | Não foi possível processar o seu pedido |
| **0042** | Não foi encontrado um pagamento com os dados fornecidos |
| **0062** | Parâmetros em falta |
| **0070** | Operação duplicada: O pagamento já se encontra cancelado |
| **0071** | Operação não permitida para o estado atual do pagamento |
| **0072** | Operação não permitida devido à impossibilidade de cancelar todas as formas de pagamento |
