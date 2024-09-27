const express = require('express');
const { getProducts } = require('../controllers/product/getProducts');
const { postProduct } = require('../controllers/product/postProduct');
const { updateProduct } = require('../controllers/product/updateProduct');
const { deleteProduct } = require('../controllers/product/deleteProduct');


const router = express.Router();

//localhost:3000/api/products
router.get("/products", getProducts);
//localhost:3000/api/product
router.post("/product", postProduct);
//localhost:3000/api/product
router.patch("/product", updateProduct);
//localhost:3000/api/product
router.delete("/product", deleteProduct);
module.exports = router;