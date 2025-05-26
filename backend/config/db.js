import mongoose from 'mongoose';
import dotenv from 'dotenv'; // since process.env. cannot not be accessed directly, we use dotenv for accessing .env
dotenv.config();

export const connectDB = async () => {
  try {

    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {

    console.log(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure, (1 means failure, 0 means success)

  }
}