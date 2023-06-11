const { readJSONFile, writeJSONFile } = require("./helpers");

function getProducts() {
    const products = readJSONFile("./data", "inventory-data.json");
    return products;
}

function getCartProducts() {
    const cartProducts = readJSONFile("./data", "cart-data.json");
    return cartProducts;
}

const addToCart = (productName, productQuantity) => {
    const product = products.filter((prod) => prod.name == productName);
    
    if (product.inStock) {
        const cartProducts = getCartProducts(); //gives existing items in the cart
        const newProduct = {
            name: productName,
            quantity: productQuantity,
            total: product.priceInCents * productQuantity
        }
        cartProducts.push(newProduct);
        writeJSONFile("./data", "cart-data.json", cartProducts);
    }
    else {
        return "Product does not exist or is no longer available."
    }
}

const showCartDetails = () => {

}

const emptyCart = () => {

}

module.exports = {
   addToCart,
   showCartDetails,
   emptyCart,
};
  