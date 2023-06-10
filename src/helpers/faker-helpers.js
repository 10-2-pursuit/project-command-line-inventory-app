const { faker } = require('@faker-js/faker');

const getProductName = () => {
    return faker.commerce.productName();
}
const getProductDescription = () => {
    return faker.commerce.productAdjective();   
}
const getProductPrice = () => {
    return faker.number.float({ min: 50, max: 150, precision: 0.01 })
}
     


module.exports = {
    getProductName,
    getProductDescription,
    getProductPrice
}