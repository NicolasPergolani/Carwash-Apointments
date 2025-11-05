const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;