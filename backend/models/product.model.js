import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
}, {
  timestamps: true // createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);
// 'Product' will be converted to 'products' in the database

export default Product;