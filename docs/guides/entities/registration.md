# Pré-preenchimento do formulário de adesão

Para facilitar a adesão do seu cliente à PayPay, disponibilizamos o seguinte método para pré-preencher o formulário de adesão.

O envio dos dados deve ser feito via browser, submetendo um formulário para o url: https://paypay.pt/aderir. O utilizador é redirecionado para a página de adesão da PayPay com os dados pré-preenchidos.

Exemplo da estrutura de dados a ser submetida como formulário `application/x-www-form-urlencoded`:

```json
{
	"clientId": "123456789",
	"name": "Entidade Teste Lda",
	"phoneNumber": "707451451",
	"address": "Estrada Regional 104 ",
	"postCode": "9000-025",
	"locality": "Funchal",
	"permanentCertificate": "1234-5678-9101",
	"supplementaryInformation": {
		"numberOfMonthlyTransactions": 1000,
		"averageValuePerTransaction": 500,
		"website": "https://www.example.com"
	},
	"economicActivity": {
		"section": "K",
		"code": 668
	},
	"availableMethods": [
		{
			"code": "CC"
		},
		{
			"code": "MB"
		},
		{
			"code": "MW"
		}
	],
	"bankAccount": {
		"owner": "John Doe",
		"bankName": "Banco",
		"iban": "PT50000781074470448483167",
		"swift": "AAAABBCC"
	},
	"user": {
		"name": "John Doe",
		"taxNumber": "123456789",
		"email": "email@email.email",
		"phoneNumber": "351#960000000",
		"isPoliticallyExposedPerson": true
	}
}
```

A estrutura de dados completa, bem como as opções para _economicActivity_ e _availableMethods_ pode ser consultada [aqui](https://paypay.pt/paypay/api/#model-Registration).
