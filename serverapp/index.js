//server setings//
const fs =require('file-system');
const express=require('express');
const app=express();
const bp = require('body-parser');
const port =4000
app.use(bp.urlencoded({extended:false}))
app.use(bp.json())
app.listen(port,()=>console.log(`app listen to port ${port}`));
// const dbc =require('../DB');