const express = require('express')
const app = express()
const dotenv=require('dotenv')
const productRoutes=require("../MVC/routes/productRoutes")



dotenv.config()
const port = process.env.PORT

const connectDB = require('./config/db')

// connect to database
connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api',productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
