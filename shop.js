const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
const router=express.Router();
const admindata=require('./admin');
router.get('/',(req,res,next)=>{
    console.log(admindata.products);
    const products =admindata.products
    res.sendFile(path.join(rootDir,'views','shop.html'));
     res.render('shop',{prods:products,docTitle:'shop'});
});

module.exports=router;
