//const { nanoid } = require("nanoid");
const inventoryData = require("../data/inventory-data.json");
const { readJSONFile, writeJSONFile } = require("./helpers");

//so we don't have to keep on calling readJSONFile
function getProducts() {
  const products = readJSONFile("./data", "inventory-data.json");
  return products;
}

function create(name, price, stock) {
  const products = getProducts();
  const newProduct = {
    name: name,
    id: 6883,
    priceInCents: price,
    inStock: stock,
  };

  products.push(newProduct);
  writeJSONFile("./data", "inventory-data.json", products);

  return newProduct;
}

//shows single item
function index(productName) {
  const products = getProducts();
  const product = products.filter((prod) => prod.name == productName);
  return product;
}

//shows all items
function show() {
  const products = getProducts();
  return products;
}

function destroy(productName) {
  const products = getProducts();
  const updatedProducts = products.filter((prod) => prod.name != productName);
  writeJSONFile("./data", "inventory-data.json", updatedProducts);
  return updatedProducts;
}

function update(productName, productPrice, productInStock) {
  const products = getProducts();
  let productToUpdate = products.find((prod) => prod.name == productName);
  const updatedProducts = products.filter((prod) => prod.name != productName);

  productToUpdate = {
    name: productName,
    id: productToUpdate.id, //same ID for now
    priceInCents: productPrice,
    inStock: productInStock,
  };
  updatedProducts.push(productToUpdate);
  writeJSONFile("./data", "inventory-data.json", updatedProducts);
  return productToUpdate;
}

module.exports = {
  index,
  show,
  create,
  destroy,
  update,
};
