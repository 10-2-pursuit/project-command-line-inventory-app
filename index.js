const { show } = require("./src/inventory-controller")
const { writeJSONFile, readJSONFile } = require("./src/helpers.js");

const run = () => {
    const action = process.argv[2];
    const productId = process.argv[3];
    
    switch (action) {
        case "show":
            const showProduct = show(productId)
            console.log(showProduct)
            break;
    }
}

run()