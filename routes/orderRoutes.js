const express = require('express');
const { newOrder } = require('../controllers/ticket/newOrder');
const { updateStock } = require('../controllers/ticket/updateStock');
const { getOrders } = require('../controllers/ticket/getOrders');

const router = express.Router();

//localhost:3000/api/order
router.post("/order", newOrder);
//localhost:3000/api/orders
router.get('/orders', getOrders)
//localhost:3000/api/updateStock
router.post("/updateStock", updateStock);

module.exports = router;