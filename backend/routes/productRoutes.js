const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('./models/product');

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder to store images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Create a new product
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const image = req.file.path;

    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      image
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Other routes...

module.exports = router;
