var order=[
    {
      customerId: 1,
      orderDate: '2022-01-01',
      orderTotal: 100.00,
      items:"Headphones"
    },
    {
      customerId: 2,
      orderDate: '2022-01-15',
      orderTotal: 50.00,
      items:"Toy"
    },
    {
        customerId: 3,
        orderDate: '2022-02-14',
        orderTotal: 500.00,
        items:"Bag"
      },
      {
        customerId: 4,
        orderDate: '2022-03-10',
        orderTotal: 5000.00,
        items:"Smart Watch"
      }
  ];

  var orders={
    customerId: 4,
        orderDate: '2022-03-10',
        orderTotal: 5000.00,
        items:"Smart Watch"
  }
  
  order.pop(orders);
  console.log(order);