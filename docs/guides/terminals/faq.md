---
sidebar_position: 7
title: 'FAQ'
---

# Perguntas Frequentes

Encontre respostas rápidas para as dúvidas mais comuns sobre os terminais PayPay.

## 1. Quando é que os pagamentos passam para o estado "Confirmado"?

Os pagamentos de terminais Verifone só passam para o estado **"Confirmado"** após a PayPay receber o _settlement_ com o estado de sucesso das operações.

:::info Settlement
O settlement é o processo de liquidação financeira que confirma definitivamente a transação junto do banco adquirente.
:::

## 2. O que acontece se uma operação for realizada com sucesso num terminal Cloud e o webhook não chegar atempadamente à PayPay?

O comportamento depende da data de validade do pagamento e das configurações enviadas:

#### 📋 Cenário 1: Data de validade ainda vigente
- **Resultado:** O pagamento é aceite e transita para o estado **"Autorizado"**.

#### 📋 Cenário 2: Data de validade expirada, mas pagamento dentro do prazo
- **Resultado:** O pagamento é aceite e fica no estado **"Autorizado (Cancelado)"**.

#### 📋 Cenário 3: Data de validade expirada + flag `blockLatePayment` ativada
- **Condição:** No pedido de solicitação do pagamento foi enviada a flag `"validDate": {"blockLatePayment": true}`.
- **Resultado:** É feito o void do pagamento e fica no estado **"Cancelado"**, mesmo que a data do pagamento esteja dentro do prazo de validade.

**Exemplo do pedido:**
```json
{
  "amount": 100,
  "validDate": {
    "blockLatePayment": true
  }
}
```

#### 📋 Cenário 4: Data de validade expirada e pagamento fora do prazo
- **Resultado:** É feito o _void_ do pagamento e fica no estado **"Cancelado"**.

## 3. Após um pagamento estar no estado "Settled", qual é o prazo máximo para realizar uma devolução?

**Não existe período máximo** para realizar devoluções de pagamentos no estado "Settled".

:::info Recomendação
Não há um prazo máximo para processar devoluções, mas fazê-lo rapidamente contribui para uma gestão financeira mais eficaz e uma melhor experiência do cliente.
:::

## 💬 Precisa de mais ajuda?

Não encontrou a resposta que procurava? Entre em contacto connosco [@apoio](mailto:apoio@paypay.pt).
