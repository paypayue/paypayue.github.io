# Tipos de eventos disponibles

| Acción                   | Descripción                                                                                                                       |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **payment_confirmed**    | La acción se desencadena cuando se confirma un pago. <br/> Nota: se aplica sólo a los pagos emitidos a través de este webservice. |
| **payment_expired**      | La acción se desencadena cuando se supera la fecha límite de pago.                                                                |
| **payment_cancelled**    | La acción se desencadena cuando el comerciante/usuario cancela un pago.                                                           |
| **payment_refunded**     | La acción se desencadena cuando el comerciante devuelve un pago.                                                                  |
| **payment_method_error** | La acción se desencadena cuando un método de pago utilizado devuelve un error asíncrono.                                          |
