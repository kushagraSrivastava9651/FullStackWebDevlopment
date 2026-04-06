 const express = require('express')
const router = express.Router()

// middleware that is specific to this router


const auth=function(req,res,next){
console.log("i am inside auth wala middleware")
req.user={userId:1,role:'student'}

if(req.user){
    next()
}
else{
    res.json(
        {
            success:false,
            message:'not valid user'
        }
    )
}
}


const student=function(req,res,next){
console.log("i am inside student wala middleware")


if(req.user.role==='student'){
    next()
}
else{
    res.json(
        {
            success:false,
            message:'this route only for studnet'
        }
    )
}
}


const admin=function(req,res,next){
console.log("i am inside admin wala middleware")


if(req.user.role==='admin'){
    next()
}
else{
    res.json(
        {
            success:false,
            message:'this route only for admin'
        }
    )
}
}
//routes

router.get('/student',auth,student,(req,res)=>{
    console.log('ok student')
    res.send('student specific page')
})

router.get('/admin',auth,admin,(req,res)=>{
    console.log('ok admin')
    res.send('admin specific page')
})

module.exports = router
