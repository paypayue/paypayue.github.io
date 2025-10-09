---
sidebar_position: 6
title: Webhooks
---
## Configuração de Webhooks

Se pretender receber notificações das transações num sistema externo, pode configurar webhooks para ser notificado automaticamente quando uma transação é concluída.

[**Eventos disponíveis**](/docs/guides/webhooks/event-types#relacionados-com-pagamentos)

:::info Cancelamento de pagamento
O evento **_payment_cancelled_**, só é desencadeado se a data de validade do pagamento expirar, ou se for realizado um **_void_** (devolução realizada antes do fecho do dia) do pagamento.
:::
