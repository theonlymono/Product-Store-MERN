// Entry point for api
import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/products.route.js';

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json()); // to parse JSON bodies

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
})