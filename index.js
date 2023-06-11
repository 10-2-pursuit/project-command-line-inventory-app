const { show, create, destroy, index, update } = require("./src/inventory-controller");
const { addToCart, showCartDetails, emptyCart } = require("./src/cart-controller");
const { writeJSONFile, readJSONFile } = require("./src/helpers.js");


const run = () => {
    //Tim/Gigi: Is this allowed? Will this create problems having hard coded arguments
    //Add error handles
    const action = process.argv[2];
    const productName = process.argv[3];
    const productPrice = process.argv[4];
    const productInStock = process.argv[5];
    
    switch (action) {
        case "show":
            const showProduct = show()
            console.log(showProduct)
            break;
        case "create":
            const newProduct = create(productName, productPrice, productInStock)
            console.log(newProduct)
            break;
        case "destroy":
            const destroyProducts = destroy(productName)
            console.log(destroyProducts)
            break;
        case "index":
            const indexedProduct = index(productName)
            console.log(indexedProduct)
            break;
        case "update":
            const updatedProduct = update(productName, productPrice, productInStock)
            console.log(updatedProduct)
            break;
        case "addToCart":
            const cartProducts = addToCart(productName, productPrice)
            console.log(cartProducts)
            break;
        case "showCartDetails":
            const showShoppingCart = showCartDetails()
            console.log(showShoppingCart);
            break;
        case "emptyCart":
            const emptyShoppingCart = emptyCart()
            console.log(emptyShoppingCart);
            break;
        default:
            console.log("There was an unexpected error.");
    }
}

run()