const Cart = require('../Models/Cart')
const fs = require('fs')

exports.cart_list = async(req, res) =>{
    try{
        const cart_item = await Cart.find({}).exec()
        res.send(cart_item) 
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.cart_create = async(req,res) =>{
    try{
        var data = req.body
        if(req.file){
            data.file = req.file.fliename
        }
        const cart_item = await Cart(data).save()
        res.send(cart_item)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}