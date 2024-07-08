// seedData.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');

dotenv.config();

const seedUsers = async () => {
  try {
    await connectDB();
    
    // Your seed data logic here
    const users = [
      { username: 'admin', email: 'admin@example.com', password: 'password123', role: 'admin' },
      { username: 'supplier', email: 'supplier@example.com', password: 'password123', role: 'supplier' },
      { username: 'user', email: 'user@example.com', password: 'password123', role: 'user' },
    ];

    await User.insertMany(users);
    console.log('Users seeded successfully');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

seedUsers();

