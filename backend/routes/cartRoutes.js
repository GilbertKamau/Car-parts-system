// routes/cartRoutes.js
const express = require('express');
const { addItemToCart, getCartItems } = require('../controllers/cartController');
const router = express.Router();

router.post('/add', addItemToCart);
router.get('/:user_id', getCartItems);

module.exports = router;
