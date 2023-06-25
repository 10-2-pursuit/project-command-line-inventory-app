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
  const products = getProducts();
  const product = products.filter((prod) => prod.name == productName);

  if (product[0].inStock) {
    const cartProducts = getCartProducts(); //gives existing items in the cart
    const newProduct = {
      name: productName,
      quantity: productQuantity,
      total: product[0].priceInCents * productQuantity,
    };
    cartProducts.push(newProduct);
    writeJSONFile("./data", "cart-data.json", cartProducts);
    return cartProducts;
  } else {
    return "Product does not exist or is no longer available.";
  }
};

const showCartDetails = () => {
  const showCart = getCartProducts();
  return showCart;
};

const emptyCart = () => {
  const products = [];
  writeJSONFile("./data", "cart-data.json", products);
  return "Your cart has been emptied.";
};

module.exports = {
  addToCart,
  showCartDetails,
  emptyCart,
};
