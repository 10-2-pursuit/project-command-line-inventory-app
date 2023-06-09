const { faker } = require('@faker-js/faker');


const getCustomerName = () => {
    return faker.hacker.verb() + "-" + faker.hacker.noun()
}
const getProductName = () => {
    return faker.commerce.productName();
}
const getProductDescription = () => {
    return faker.commerce.productDescription();   
}
const getProductPrice = () => {
    return faker.commerce.price({ min: 100, max: 200, dec: 2, symbol: '$' })
}
     


module.exports = {
    getProductName,
    getProductDescription,
    getProductPrice
}