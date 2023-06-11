//const { nanoid } = require("nanoid");
const inventoryData = require("../data/inventory-data.json")
const { readJSONFile, writeJSONFile } = require("./helpers");

//so we don't have to keep on calling readJSONFile
function getProducts () {
    const products = readJSONFile("./data", "inventory-data.json");
    return products;
}

function create (name, price, stock) {
    const product = getProducts();

}

// function index ( ) {

// }

function show (productId) {
 const products = getProducts();
 const product = products.filter((prod) => prod.id == productId)
 return product;
}

module.exports = {
show
 }