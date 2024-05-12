const express = require('express');

const app = express();

app.get('/aggregate' , (req,res)=>{
    console.log('I m at aggregate service',req);
})

app.listen(3002, () => console.log('aggregator and dispatcher service started at port 3002'));
