const user = require('../Models/Users')
const fs = require('fs')

exports.listuser = async (req, res) =>{
    try{
        const id = req.params.id
        const listuser = await user.find({}).exec()
        res.send(listuser)
    }
    catch(err){
        console.log(err)
        res.status(500).send("showuser error")
    }
}