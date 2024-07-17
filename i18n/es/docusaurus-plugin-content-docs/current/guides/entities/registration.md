# Cumplimentación previa del formulario de adhesión

Para facilitar a su cliente la adhesión a PayPay, proporcionamos el siguiente método para cumplimentar previamente el formulario de suscripción.

El envío de datos debe hacerse a través del navegador, enviando un formulario a la url: https://paypay.pt/aderir. El usuario es redirigido a la página de adhesión de PayPay con datos precargados.

Ejemplo de la estructura de datos que debe presentarse via formulario `application/x-www-form-urlencoded`:

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

La estructura de datos completa, así como las opciones de _economicActivity_ y _availableMethods_ pueden consultarse [aquí](https://paypay.pt/paypay/api/#model-Registration).
