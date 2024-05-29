# Payload example

```json
{
	"webhook": {
		"id": "460",
		"action": "payment_method_error",
		"createdAt": "2022-03-24T12:34:38+00:00"
	},
	"payments": [
		{
			"id": "43320",
			"type": "payment",
			"referenceDetails": {
				"entity": "12797",
				"reference": "002460930"
			},
			"stateDetails": {
				"state": "pending"
			},
			"paymentMethod": {
				"code": "MW",
				"type": "DEFAULT",
				"details": {
					"phoneNumber": "351#961879263"
				},
				"result": {
					"code": "e02433",
					"message": "Transação rejeitada pelo banco ou emissor do cartão",
					"createdAt": "2022-03-08T12:46:33+00:00"
				}
			},
			"amount": 100,
			"createdAt": "2022-03-08T12:30:58+00:00",
			"updatedAt": "2022-03-08T12:46:33+00:00",
			"validDate": {
				"start": "2022-03-08T12:30:58+00:00",
				"end": "2022-09-08T23:59:59+01:00"
			},
			"availableMethods": [
				{
					"code": "CC",
					"type": "DEFAULT",
					"name": "Cartão de crédito/débito"
				},
				{
					"code": "MB",
					"type": "NORMAL",
					"name": "Multibanco"
				},
				{
					"code": "MW",
					"type": "DEFAULT",
					"name": "MB WAY"
				}
			],
			"paymentFee": {
				"netAmount": "0.00950000",
				"taxAmount": "0.00209000"
			},
			"bankAccount": {
				"code": "O9uFVmSZ",
				"bankName": "Banco",
				"last4digits": "8513"
			}
		}
	]
}
```
