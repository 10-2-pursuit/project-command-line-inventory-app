# Warehouse Fulfillment Center App

This warehouse fulfillment center is a third-party service provider to many companies, and we work by taking in orders made by employees through the company and we process and ship those products to them. 

## How Does The App Work?

### *These are the features:*

**create:**
  - this function will take in a name from the user and store that name and the information created to the order data 
```js
npm run create "amy lee"
```

**index:**
  - this function will show a list of orders in the cart by presenting the unique id and employee name 

**show:**
  - this function will allow you to seen the details of a specific order in the cart by the id
```js
npm run show KUi2
```

**update:**
  - this function will update the employee name on existing order in the cart
```js
npm run update KUi2 "sam miller"
```

**destroy:**
  - this function will allow you to delete a specific order from the cart by the id

**total:**
  - this function will output a list of the orders by the employee name and the price of their item, count how many orders their are and the total of the employee order cart.

**empty:**
  - this function will delete all orders from the shopping cart

**filter:**
  - this function will filter through orders in the cart based on the user input of ">" or "<". This will output an object or a list objects of employee orders greater than or less than $100.
```js
npm run filter ">"
```
