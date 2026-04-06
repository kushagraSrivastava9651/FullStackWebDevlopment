const express = require('express')
const router = express.Router();

const User = require('../models/userModel')



router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json({
            message: err.message, success: false
        })
    }
})


router.post('/users', async (req, res) => {
    try {
        const {name,age,wieght}=req.body;
        const newUser=new User({name,age,wieght})
        await newUser.save();
        res.status(200).json({
            user:newUser,
            success:true
        })
    
    }
    catch (err) {
        res.status(500).json({
            message: err.message, success: false
        })
    }
})

router.put('/users/:id', async (req, res) => {
        const {id}=req.params;
        const {name,age,wieght}=req.body;
    try {
    
const updateUser=await User.findByIdAndUpdate(id,{name,age,wieght})
if(!updateUser){
    res.json({
        message:'User Not Found'
    })
}
     res.status(200).json({
            user:updateUser,
            success:true
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message, success: false
        })
    }
})



router.delete('/users/:id', async (req, res) => {
        const {id}=req.params;
    try {
    
const deleteUser=await User.findByIdAndDelete(id)
if(!deleteUser){
    res.json({
        message:'User Not Found'
    })
}
     res.status(200).json({
            user:deleteUser,
            success:true
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message, success: false
        })
    }
})

module.exports = router; // ✅ VERY IMPORTANT