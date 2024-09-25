const express = require('express');
const { getProducts } = require('../controllers/product/getProducts');


const router = express.Router();

//localhost:3000/api/products
router.get("/products", getProducts);
router.get("/products", otroController);


module.exports = router;