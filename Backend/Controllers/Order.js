const Order = require('../Models/Order')

exports.order_list = async(req, res) =>{
    try{
        const order_item = await(Order.find({}).exec())
        res.send(order_item)
    }catch(err){
        console.log(err)
        res.status(500).send('Order Error')
    }
}

exports.order_create = async(req, res) =>{
    try{
        var data = req.body
        if(req.file){
            data.file = req.file.filename
        }
        const order_item = await Order(data).save()
        res.send(order_item)
    }catch(err){
        console.log(err)
        res.status(500).send('Order Error')
    }
}