const User = require('../Models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        // 1. CheckUser
        const { name, password } = req.body
        console.log(req.body)

        var user = await User.findOne({ name })

        if (user) {
            return res.send('User Already Exists!!!').status(400)
        }

        // 2.Ecrypt
        const salt = await bcrypt.genSalt(10)
        user = new User({
            name,
            password
        })
        user.password = await bcrypt.hash(password, salt)

        // 3.Save
        await user.save()
        res.send('Register Success')

        console.log(user)
        // res.send(req.body)
    }
    catch (err) {
        console.log(err)
        res.status(500).send('register error')
    }
}

exports.login = async (req, res) => {
    try {
        // 1. Check User
        const { name, password } = req.body
        var user = await User.findOneAndUpdate({ name }, { new: true })
        console.log(user)
        if(user){
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                // console.log("password invalid")
                return res.send('password Invalid!!').status(400)
            }

            // 2.Payload

            var payload = {
                user:{
                    name:user.name
                }
            }

            // 3. Generate token
            jwt.sign(payload, 'jwtsecret', { expiresIn:100 }, (err, token) => {
                if(err) throw err;
                res.json({token, payload})
            })
            
        }else{
            return res.send('User not found!!!').status(400)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.Checkuser = async (req, res) =>{
    try{
        // const id = req.params.id
        const listuser = await User.find({}).exec()
        res.send(listuser)
    }
    catch(err){
        res.status(500).send('Checkuser error')
    }
}