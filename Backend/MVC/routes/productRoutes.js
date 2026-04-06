const express = require('express')
const router = express.Router()
const {getProduct,createProduct,updateProduct}=require('../controllers/productController')


// define the home page route
router.get('/products', getProduct)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
// define the about rout
module.exports = router
