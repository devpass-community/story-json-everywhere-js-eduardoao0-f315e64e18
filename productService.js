

async function getProduct(productId) {  
    const fetch = require("node-fetch");

    const apiUrl = `https://fakestoreapi.com/products/${productId}`;    
    const response =  await fetch(apiUrl);   
    
    const products =  response.json();
    return products    
}

module.exports = getProduct;
