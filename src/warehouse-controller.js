const { nanoid } = require("nanoid");
const chalk = require("chalk");
const { 
    getProductName,
    getProductDescription,
    getProductPrice
} = require("./helpers/faker-helpers")



function create(orders, customerName) {
    const order = {
      id: nanoid(),
      customer: customerName,
      product: getProductName(),
      description: getProductDescription(),
      price: getProductPrice()
    };
    orders.push(order);
    return orders;
  }
  
  function index(orders) {
    return orders.map((order) => order.id + " " + order.codeName).join("\n");
  }
  
  function show(orders, orderId) {
    const order = orders.find((order) => order.id === orderId);
    const  { id, customer, product } = order;
  
    return `
      Order ID: #${id}
      Name: ${customer}
      Product: ${product}
      Description: ${description}
      Price: ${price}
      `
  }
  function destroy(orders, orderId) {
    const index = orders.findIndex((order) => order.id === orderId);
    if (index > -1) {
      orders.splice(index, 1);
     console.log("Order deleted.");
    } else {
     console.log("Order not found. No action taken");
    }
  }
  
  function updateOrder(orders, orderId, updatedOrder) {
    const index = orders.findIndex((order) => order.id === orderId);
    if (index > -1) {
      orders[index].id = orderId;
      orders[index].coverStory = updatedOrder;
     console.log("Order cover successfully updated.");
      return orders;
    } else {
     console.log("Order not found. No action taken.");
      return orders;
    }
  }
  
  module.exports = { create, destroy, updateOrder, index, show };