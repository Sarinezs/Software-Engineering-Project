const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name:String,
    price:{
        type:Number
    },
    type:{
        type:String
    },
    size:{
        type:String,
        default: '-'
    },
    description:{
        type:String,
        default: '-'
    },
    file: {
        type: String,
        default: "noimage.jpg"
    },
}, { timestamps: true})

module.exports = mongoose.model('Carts', productSchema) 