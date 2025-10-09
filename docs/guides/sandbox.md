---
sidebar_position: 2
title: Sandbox
---

A PayPay disponibiliza um ambiente de [testes](https://paypay.acin.pt/api) de forma a garantir a qualidade e a confiabilidade das integrações com a nossa solução.

## Requisitos

- O comerciante deverá estar registado e aprovado na plataforma PayPay
- Solicitar à nossa equipa de apoio um acesso ao ambiente de testes e as credenciais da API através do email [@apoio](mailto:apoio@paypay.pt)
- Indicar quais os métodos de pagamento que desejam testar
- Solicitar os dados de um cartão de crédito/débito se pretender realizar pagamentos através deste método
- Se pretender realizar pagamentos através do MB WAY devem indicar os números de telemóveis desejados. São aceites números estrangeiros
- Caso pretender integrar com terminais de pagamento, deverá indicar-nos o tipo de terminal (Standalone ou Cloud)


#### Pagamento de referências Multibanco

Caso seja pretendido colocar como pagas as referências multibanco é necessário indicar-nos quais e enviar para o email [@apoio](mailto:apoio@paypay.pt).

### Ambientes

#### Testes
```
https://paypay.acin.pt/api
```

#### Produção

Após realizados os testes de integração e estar tudo funcional, devem ser geradas as credenciais da API o ambiente de produção. Para isso, devem realizar login na [PayPay](https://paypay.pt) aceder ao menu Configurações->Integrações e criar uma nova integração e utilizar o endereço:

```
https://paypay.pt/api
```
