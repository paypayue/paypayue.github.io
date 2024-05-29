# Tipos de eventos disponíveis

| Ação                     | Descrição                                                                                                                          |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **payment_confirmed**    | Ação é desencadeada quando um pagamento é confirmado. <br/> Nota: aplica-se apenas a pagamentos emitidos através deste webservice. |
| **payment_expired**      | Ação é desencadeada quando a data limite de pagamento é ultrapassada.                                                              |
| **payment_cancelled**    | Ação é desencadeada quando um pagamento é cancelado pelo comerciante/utilizador.                                                   |
| **payment_refunded**     | Ação é desencadeada quando um pagamento é devolvido pelo comerciante.                                                              |
| **payment_method_error** | Ação é desencadeada quando um método de pagamento utilizado retorna erro assíncrono.                                               |
