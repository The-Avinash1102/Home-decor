const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const Razorpay = require("razorpay");


const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send("Hello World!");
})

app.post('/orders', (req,res) => {
    const razorpay = new Razorpay({
        key_id:"",
        key_secret:""
    })
    const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt:"receipt#1",
        payment_capture: 1
    }

    try{
        const response = await razorpay.orders.create(options)
        
        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    }
    catch (error)
    {
        res.status(500).send    
    }
})

app.listen(port,() => {
    console.log(`server is running on ${port}`);
})