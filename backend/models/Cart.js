// models/Cart.js
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true }
});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
