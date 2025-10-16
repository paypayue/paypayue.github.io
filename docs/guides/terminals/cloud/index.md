---
sidebar_position: 1
---

# Início

O Terminal Cloud é uma solução avançada que permite integração completa entre o terminal de pagamento e o sistema do cliente através de API REST, possibilitando automação e controlo remoto das transações.

## Arquitetura da Integração

```
┌─────────────────┐      API REST       ┌──────────────────┐
│  Seu Sistema    │ ←─────────────────→ │   API PayPay     │
│  (POS/ERP)      │                     │                  │
└─────────────────┘                     └──────────────────┘
        ↑                                        ↓
        │                                   ┌────────────┐
        │          Webhook                  │  Terminal  │
        └───────────────────────────────────┤   Cloud    │
                 (notificação)              └────────────┘
                                                   ↕
                                            ┌──────────────┐
                                            │    Rede de   │
                                            │  Pagamentos  │
                                            └──────────────┘
```

## Resolução de Problemas Comuns

| Problema | Causa Provável | Solução |
|----------|----------------|---------|
| Terminal não responde | Terminal offline ou UUID incorreto | Verificar conexão e UUID do Terminal |
| Webhook não recebido | Endpoint não configurado ou inacessível | Verificar URL e firewall |
| Transação recusada | Verificar fundos, validade do cartão ou contactar banco emissor |
| Terminal não responde | Verificar conexão à internet e reiniciar terminal |
| Erro na impressão | Verificar papel e configurações de impressão |
| PIN incorreto | Cliente pode tentar novamente (máximo 3 tentativas) |


## Próximos Passos

Explore a documentação completa para integração:

- **[Configuração de Webhooks](/docs/guides/terminals/webhooks/)** - Setup de notificações.
- **[Enviar Pedido de Pagamento](/docs/guides/terminals/cloud/create-payment)** - Enviar pedido de pagamento para terminal cloud.
