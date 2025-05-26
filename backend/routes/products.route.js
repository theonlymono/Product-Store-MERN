import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct  } from '../controllers/product.controller.js';

const router = express.Router();


// ↆ Endpoints ↆ

// GET PRODUCTS
router.get("/", getProducts)

// CREATE PRODUCT
router.post("/", createProduct)

// UPDATE PRODUCT
router.put("/:id", updateProduct)

// DELETE PRODUCT
router.delete("/:id", deleteProduct)


export default router;