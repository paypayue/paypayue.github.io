---
sidebar_position: 1
title: 'Início'
description: ''
---

Webhook é uma forma de recebimento de informações, via retorno de chamada web ou HTTP, quando um evento acontece.
Dessa forma, o webhook, é uma maneira prática para um app ou sistema receber informações em tempo real da PayPay.

**Método**: ``POST``
**Content-type**: ``application/x-www-form-urlencoded``

### Tipos de eventos disponíveis

| Ação | Descrição |
|:--- |:-----|
| **payment_confirmed** | Ação é desencadeada quando um pagamento é confirmado. <br/> Nota: aplica-se apenas a pagamentos emitidos através deste webservice. |
| **payment_expired** | Ação é desencadeada quando a data limite de pagamento é ultrapassada.  |
| **payment_cancelled** | Ação é desencadeada quando um pagamento é cancelado pelo comerciante/utilizador.  |
| **payment_refunded** | Ação é desencadeada quando um pagamento é devolvido pelo comerciante.  |
