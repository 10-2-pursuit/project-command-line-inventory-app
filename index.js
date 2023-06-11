const { show, create, destroy, index } = require("./src/inventory-controller")
const { writeJSONFile, readJSONFile } = require("./src/helpers.js");

const run = () => {
    const action = process.argv[2];
    const productName = process.argv[3];
    const productPrice = process.argv[4];
    const productInStock = process.argv[5];
    
    switch (action) {
        case "show":
            const showProduct = show(productName)
            console.log(showProduct)
            break;
        case "create":
            const newProduct = create(productName, productPrice, productInStock)
            console.log(newProduct)
            break;
        case "destroy":
            const updatedProducts = destroy(productName)
            console.log(updatedProducts)
            break;
    }
}

run()