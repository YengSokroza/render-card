'use strict'

import { cardProduct } from "../components/cardProduct.js";
import { getData } from "../store/fetchApi.js";


const renderArea = document.querySelector('#render-area');


// const BASE_URL = "http://localhost:5500/data/products.json"

// fetch(BASE_URL)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.map((product) => {
//             renderArea.innerHTML += cardProduct(product)
//         })
    
//     })


const products = await getData("products")


console.log(products)

products.map((product) => {
                renderArea.innerHTML += cardProduct(product)
})

