---
sidebar_position: 1
description: Pagamento através de POS (Terminal/TPA)
---

# Início

A PayPay disponibiliza duas soluções de terminais de pagamento (POS/TPA) para aceitar pagamentos presenciais: **Standalone** e **Cloud**.

Ambas as soluções permitem aceitar pagamentos com cartão de forma segura e integrada com o backoffice da PayPay.

## Comparação Rápida

| Característica | Standalone | Cloud |
|----------------|------------|-------|
| Configuração | Plug & Play | Requer integração API |
| Introdução manual de valor | Sim | Não (via API) |
| Integração com software | Opcional (webhook) | Completa (API + webhook) |
| Sincronização com backoffice | Sim | Sim |

## Terminal Standalone

Solução autónoma ideal para estabelecimentos que precisam de uma forma rápida e simples de aceitar pagamentos.

**Quando usar:**
- Lojas físicas sem sistema de gestão integrado;
- Pontos de venda que apenas precisam de processar pagamentos;
- Estabelecimentos que valorizam simplicidade e rapidez;
- Negócios que não necessitam de integração com software externo.

**Características:**
- Configuração plug & play - sem necessidade de configurações técnicas;
- Sincronização automática em tempo real com backoffice PayPay;
- Webhook opcional para notificações de transações;
- Funcionamento completamente autónomo;
- Ideal para começar a aceitar pagamentos rapidamente.

## Terminal Cloud

Solução avançada para negócios que precisam de integração completa entre terminal e sistemas de gestão.

**Quando usar:**
- E-commerce com loja física que precisa de integração omnicanal;
- Sistemas POS que precisam de iniciar pagamentos remotamente;
- Software de faturação com pagamentos integrados;
- Restaurantes com sistemas de gestão de pedidos;
- Automação completa de processos de venda e pagamento.

**Características:**
- Comunicar remotamente com o terminal para iniciar uma transação (sem introdução manual do montante);
- Sincronização bidirecional em tempo real;
- Webhook para confirmação automática de transações no seu sistema;
- Integração completa com software de terceiros;
- Ideal para automação e experiência de utilizador otimizada.

## Métodos suportados nos 2 terminais
- **Contactless (NFC)**: Aproximação do cartão ou dispositivo móvel.
- **Chip (EMV)**: Inserção do cartão com chip.
- **Banda magnética**: Passagem do cartão (quando aplicável).

## Fluxo de pagamento no terminal

### 1. Apresentação do Cartão

Quando o operador introduz o montante a ser pago no terminal (nos terminais standalone) ou envia o pedido remoto para o terminal (nos terminais cloud), o cliente deve:

1. apresentar o cartão através de um dos seguintes métodos:
   - **Contactless**: Aproxima cartão ou dispositivo móvel.
   - **Chip**: Insere cartão no terminal.
   - **Banda magnética**: Passa o cartão.
2. Terminal faz a leitura dos dados do cartão.

### 2. Autenticação

Dependendo do valor e tipo de cartão, pode ser necessária autenticação:

1. Dados do cartão são lidos pelo terminal.
2. Sistema verifica se autenticação é necessária:
   - **Se sim**: Cliente introduz PIN.
     - Se PIN correto: Prossegue para autorização.
     - Se PIN incorreto: Nova tentativa ou cancelamento (máx. 3 tentativas).
   - **Se não**: Processamento direto para autorização.

**Tipos de autenticação:**
- **PIN**: Para transações acima do limite contactless.
- **Assinatura**: Para alguns tipos de cartão (menos comum).
- **Sem autenticação**: Para pagamentos contactless de valor reduzido.

### 3. Processamento e Autorização

O terminal comunica com a rede de pagamentos para autorizar a transação:

1. Dados validados no terminal (conexão segura e encriptada);
2. Terminal envia pedido para rede de pagamento;
3. Rede contacta banco emissor para validação;
4. Banco verifica fundos disponíveis e limites do cartão;
5. Resposta é enviada de volta ao terminal:
   - **Aprovada**: Transação autorizada e débito efetuado.
   - **Recusada**: Mensagem de erro apresentada.

:::info Tempo médio
O processo de autorização demora normalmente **2-5 segundos**.
:::

### 4. Confirmação e Comprovativo

Após a autorização, o pagamento é concluído:

1. Transação aprovada pelo banco;
2. Transação é sincronizada automaticamente com o backoffice PayPay em tempo real;
3. PayPay verifica se webhook está configurado:
   - **Se sim**: Notificação é enviada para sistema externo.
   - **Se não**: Transação fica visível apenas no backoffice.

## Próximos Passos

Contacte a equipa de [@apoio](mailto:apoio@paypay.pt) para aquisição e consulte os próximos passos:

- [**Terminal Standalone**](/docs/category/standalone)
- [**Terminal Cloud**](/docs/category/cloud)
- [**Webhooks**](/docs/category/webhooks)
