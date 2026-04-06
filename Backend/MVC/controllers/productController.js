const Product=require('../models/productModel')

const getProduct=async (req,res)=>{

    try{

        const allProduct=await Product.find();
        if(allProduct.length === 0){
             res.status(404).json({
            success:false,
            message:"No product found"
        })
        } else {
            res.status(200).json({
                success:true,
                products:allProduct
            })
        }
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

// ✅ CREATE product
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();

        return res.status(201).json({
            success: true,
            product: savedProduct
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        return res.status(200).json({
            success: true,
            product: updatedProduct
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
module.exports = { getProduct, createProduct,updateProduct };