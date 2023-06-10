const { faker } = require('@faker-js/faker');

const getProductName = () => {
    return faker.commerce.productName();
}
const getProductDescription = () => {
    return faker.commerce.productAdjective();   
}
const getProductPrice = () => {
    return faker.commerce.price({ min: 50, max: 150, dec: 2 })
}
     


module.exports = {
    getProductName,
    getProductDescription,
    getProductPrice
}