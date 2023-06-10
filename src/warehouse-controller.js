const { nanoid } = require("nanoid");
const chalk = require("chalk");
const { 
    getProductName,
    getProductDescription,
    getProductPrice
} = require("./helpers/faker-helpers")



function create(orders, orderName) {
    const order = {
      id: nanoid(4),
      customer: orderName,
      product: getProductName(),
      description: getProductDescription(),
      price: getProductPrice()
    };
    orders.push(order);
    return orders;
  }
  
  function index(orders) {
    return orders.map((order) => chalk.green.bold(order.id) + " " + chalk.blueBright(order.customer)).join("\n");
  }
  
  function show(orders, orderId) {
    const order = orders.find((order) => order.id === orderId);
    const  { id, customer, product, description, price } = order;
  
    return `
      Order ID: ${chalk.green(id)}
      Name: ${chalk.blue(customer)}
      Product: ${chalk.red(product)}
      Description: ${chalk.magenta.italic(description)}
      Price: $${chalk.yellow(price)}
      `
  }
  function destroy(orders, orderId) {
    const index = orders.findIndex((order) => order.id === orderId);
    if (index > -1) {
      orders.splice(index, 1);
      console.log("Order deleted.");
      return orders;
    } else {
     console.log("Order not found. No action taken");
    }
    
  }
  
  function updateOrder(orders, orderId, updatedOrder) {
    const index = orders.findIndex((order) => order.id === orderId);
    if (index > -1) {
      orders[index].id = orderId;
      orders[index].customer = updatedOrder;
     console.log("Successfully updated customer name on order.");
      return orders;
    } else {
     console.log("Order not found. No action taken.");
    }
  }

  function total(orders) {
    let total = orders.reduce((a,b) => (a + b.price), 0)
    total = +total.toFixed(2)

    let count = orders.length;

    return `The number of items in cart is ${count} and total cost of the order is $${total}`
  }

  function emptyCart(orders) {
    if(orders) {
        console.log("All items have been deleted from your cart.");
        return [];
    }
  }

  function filterByPrice(orders) {
    if (process.argv[3] === ">") {
        return ordersOver100 = orders.filter((order) => order.price >= 100)
    } else if (process.argv[3] === "<") {
        return ordersOver100 = orders.filter((order) => order.price < 100)
    }
  }
  
  module.exports = {
    create,
    index,
    show, 
    destroy, 
    updateOrder,
    total,
    emptyCart,
    filterByPrice 
    };