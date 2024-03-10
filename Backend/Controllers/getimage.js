const Product = require('../Models/product')
const fs = require('fs')

exports.getimage = async (req, res) =>{
    try{
        console.log("lkashg")
        const imagename = await Product.find({}).exec()
        res.send(imagename)
    }catch(err){
        console.log(err)
        res.status(500).send("getimage error")
    }
}