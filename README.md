# Command Line Application: Personal Care and Fragrance

## Application Summary

This application mimics a personal care and fragrance store. It can create, index, view all, update and delete items from the data set.

The application uses "**nanoid**" to create a unique ID for each item.

## How To Use:

The application uses a number of methods and scripts to execute specific functions. The following represents different descriptions of the product: <br>
<br>
**itemName**: a string which represents the name of the item.
<br>
<br>
**itemPrice**: a number which represents the price of the item in cents.
<br>
<br>
**stockStatus**: a boolean which represents whether the item is in stock or not.
<br>
<br>
### Create New Product: ###
 In order to create a new item into our database you must use the following syntax:

> `node index.js create itemName itemPrice stockStatus`<br><br>

### Show All Products: ###
To view *all* the products in the data set use the following syntax:

> `node index.js show`<br><br>

### Delete Item: ### 
To delete an item from the data set use the following syntax:

> `node index.js destroy itemName`<br><br>

### View Single Item: ###
To view a *single* item from the data set use the following syntax:

> `node index.js index itemName`<br><br>

### Modify Existing Item: ###
To modify a *single* item from the data set use the following syntax:

> `node index.js index itemName itemPrice stockStatus`<br><br>

### Add Item to Cart: ###
This application has the added functionality of creating a seperate "shopping cart" dataset. In order to add items to the shopping cart, use the following syntax:

> `node index.js addToCart itemName itemQuantity`<br><br>

### Show Cart Details: ### 
To see the items in your cart, use the following syntax:

> `node index.js showCart`<br><br>

### Empty Cart: ###
To empty all the items in your shopping cart, use the following syntax:

> `node index.js emptyCart`<br><br>