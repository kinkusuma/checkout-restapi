POST /order

- request

```json
{
  buyerName: string,
  shippingAddress: string,
  shipOn: datetime,
  paymentMethod: string,
  orderItems: [{
    name: string,
    price: int,
    quantity: int
  }],
}
```

- response

```json
{
  id: string
}
```

GET /order/:id

- response

```json
{
  id: string,
  status: string,
  buyerName: string,
  shippingAddress: string,
  shipOn: datetime,
  paymentMethod: string,
  orderItems: [{
    name: string
    price: int
    quantity: int
  }],
  paymentRequest: [{
    price: int,
    paymentMethod: string,
    status: string
  }]
}
```

POST stimulate-payment/:payment-id

- response

```json
{
  msg: string
}
```
