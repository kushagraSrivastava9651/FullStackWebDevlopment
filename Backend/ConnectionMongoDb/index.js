const express=require('express')
const connectDB = require('./db');
const users=require('./routes/users')


const app=express();
app.use(express.json());
connectDB();

app.use('/api',users)

const PORT=3000;


app.get('/',(req,res)=>{
    console.log("i am inside home page")
    res.send('Hello jee')
})


app.listen(PORT,()=>{
    console.log('server is running')
})