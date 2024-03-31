const Cart = require('../Models/Cart')

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
        // console.log(req.body)
        if(req.file){
            data.file = req.file.fliename
        }
        const cart_item = await Cart(data).save()
        res.send(cart_item)
    }catch(err){
        // console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.cart_remove = async(req, res) =>{
    try{
        const id = req.params.id
        const removed = await Cart.findOneAndDelete({_id: id}).exec()

        res.send(removed)
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}