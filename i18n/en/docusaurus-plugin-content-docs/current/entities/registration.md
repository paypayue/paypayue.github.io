# Pre-filling the registration form

To make it easier for your customer to register in PayPay, we provide the following method to pre-fill the registration form.

The submission of data should be done via browser by submitting a form to the url: https://paypay.pt/aderir. After this step the user is redirected to PayPay registration page with pre-filled data.

Example of the data structure to be submitted via form `application/x-www-form-urlencoded`:

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

The complete data structure, as well as the options for _economicActivity_ and _availableMethods_ can be consulted [here](https://paypay.pt/paypay/api/#model-Registration).
