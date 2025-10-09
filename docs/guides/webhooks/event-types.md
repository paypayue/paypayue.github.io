---
sidebar_position: 2
description: ''
---

# Tipos de eventos disponíveis

### Relacionados com pagamentos

| Ação | Descrição |
| :- | :- |
| **payment_authorized** | Ação é desencadeada quando um pagamento é autorizado. |
| **payment_confirmed** | Ação é desencadeada quando um pagamento é confirmado. |
| **payment_expired** | Ação é desencadeada quando a data limite de pagamento é ultrapassada. |
| **payment_cancelled** | Ação é desencadeada quando um pagamento é cancelado pelo comerciante utilizador. |
| **payment_refunded** | Ação é desencadeada quando um pagamento é devolvido pelo comerciante. |
| **payment_method_error** | Ação é desencadeada quando um método de pagamento utilizado retorna erro assíncrono. |

### Relacionados com entidades associadas a integração

| Ação | Descrição |
| :- | :- |
| **entity_pending** | Ação é desencadeada quando a entidade transita para o estado de aprovação "Pendente". |
| **entity_approved** | Ação é desencadeada quando a entidade transita para o estado de aprovação "Aprovada" |
| **entity_declined** | Ação é desencadeada quando a entidade transita para o estado de aprovação "Recusada" |
