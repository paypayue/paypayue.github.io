---
sidebar_position: 4
title: 'Standalone'
---

O Terminal Standalone da PayPay é uma solução autónoma que permite aceitar pagamentos com cartão de forma simples e rápida, sem necessidade de integração técnica complexa.

## Arquitetura da Integração

O Terminal Standalone funciona de forma autónoma com sincronização automática para o backoffice da PayPay. Opcionalmente, pode integrar-se com sistemas externos através de webhooks.

```
┌─────────────────────────────────────────────────────────┐
│                   TERMINAL STANDALONE                   │
│                                                         │
│  ┌──────────────┐                                       │
│  │   Operador   │ ──→ Introduz valor manualmente        │
│  └──────────────┘                                       │
│         │                                               │
│         ↓                                               │
│  ┌──────────────┐                                       │
│  │   Terminal   │ ──→ Processa pagamento localmente     │
│  │   (Local)    │                                       │
│  └──────────────┘                                       │
│         │                                               │
│         ↓                                               │
│  ┌──────────────┐                                       │
│  │  Rede de     │ ──→ Autorização bancária              │
│  │  Pagamentos  │                                       │
│  └──────────────┘                                       │
└─────────────────────────────────────────────────────────┘
         │
         │ (Sincronização automática)
         ↓
┌─────────────────┐
│   Backoffice    │ ──→ Visualização e gestão
│    PayPay       │     de transações
└─────────────────┘
         │
         │ (Webhook - Opcional)
         ↓
┌─────────────────┐
│  Seu Sistema    │ ──→ Recebe notificações
│   (Opcional)    │     de transações
└─────────────────┘
```

## Fluxo de Pagamento
Consulte o [fluxo de pagamento](/docs/guides/terminals#fluxo-de-pagamento-no-terminal).

## Vantagens do Terminal Standalone

- ⚡ **Rapidez**: Processo simples e direto (transação completa em menos de 30 segundos)
- 🔒 **Segurança**: Encriptação end-to-end e conformidade PCI-DSS
- 📱 **Autonomia**: Funciona independentemente de sistemas externos
- 🔄 **Sincronização automática**: Dados sempre atualizados no backoffice em tempo real
- 🔔 **Notificações opcionais**: Webhook disponível para integração básica
- 💰 **Sem custos de integração**: Sem necessidade de desenvolvimento técnico

## Resolução de Problemas Comuns

| Problema | Solução |
|----------|---------|
| Transação recusada | Verificar fundos, validade do cartão ou contactar banco emissor |
| Terminal não responde | Verificar conexão à internet e reiniciar terminal |
| Erro na impressão | Verificar papel e configurações de impressão |
| PIN incorreto | Cliente pode tentar novamente (máximo 3 tentativas) |

## Próximos Passos

Agora que conhece o fluxo de pagamento, explore:

- **[Configuração de Webhooks](/docs/guides/terminals/webhooks/)** - Receba notificações automáticas de transações
- **[FAQ](/docs/guides/terminals/faq/)** - Respostas às perguntas mais frequentes
