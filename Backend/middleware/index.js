const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

// //middleware for loging,auth and validation
// const logingmiddleware=function(req,res,next){
//     console.log('abhi logong kr rha ')
//     next()
// }
// app.use(logingmiddleware)

// const authmiddleware=function(req,res,next){
//     console.log('abhi auth kr rha ')
//     res.send('sidha niklo yha se')
//     // next()
// }
// app.use(authmiddleware)

// const validationmiddleware=function(req,res,next){
//     console.log('abhi validation kr rha ')
//     next()
// }
// app.use(validationmiddleware)


// app.get('/', (req, res) => {
//      console.log('mae route handler hu')
//   res.send('Hello Worlgiugdss!')
//   console.log(req.body)
// })


const route = require('../middleware/routes/route')
app.use('/api', route)




app.listen(port, () => {
  console.log(`Example app listening on ports ${port}`)
})
