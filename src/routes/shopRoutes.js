const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');


router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item_id);
router.post('/item/:id/add', shopControllers.item_id_add);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.cart_);

module.exports = router;
