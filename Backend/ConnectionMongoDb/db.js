const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const dotenv=require('dotenv').config()


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI, {
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;