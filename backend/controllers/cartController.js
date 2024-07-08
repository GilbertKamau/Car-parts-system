// controllers/cartController.js
const Cart = require('../models/Cart');

exports.addItemToCart = async (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    try {
        const cart = new Cart({ user_id, product_id, quantity });
        await cart.save();
        res.status(201).json({ message: 'Item added to cart' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCartItems = async (req, res) => {
    const { user_id } = req.params;
    try {
        const cartItems = await Cart.find({ user_id }).populate('product_id');
        res.json(cartItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
