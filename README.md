POST /order/new

- request

```
{
  buyerName: string,
  shippingAddress: string,
  paymentMethod: string,
  orderItems: [{
    name: string,
    price: int,
    quantity: int
  }],
}
```

- response

```
{
  id: string
}
```

GET /order/:id

- response

```
{
  id: string,
  status: string,
  buyerName: string,
  shippingAddress: string,
  paymentMethod: string,
  items: [{
    name: string
    price: int
    quantity: int
  }],
  paymentRequest: {
    price: int,
    paymentMethod: string,
    status: string
  }
}
```

POST /order/cancel

- request

```
{
  orderId: string
}
```

- response

```
{
  msg: string
}
```

POST stimulate-payment/:order-id

- response

```
{
  msg: string
}
```
