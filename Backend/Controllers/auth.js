// const User = require('../Models/usertest')
const User = require('../Models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {

        const { firstname, lastname, phone, email, password, address } = req.body
        console.log(req.body)
        var user = await User.findOne({ email })

        if (user) {
            return res.send('Your email Already use.').status(400)
        }

        // 2.Ecrypt
        const salt = await bcrypt.genSalt(10)
        user = new User({
            firstname,
            lastname,
            phone,
            email,
            password,
            address,
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
        res.send('register error').status(500)
    }
}

exports.login = async (req, res) => {
    try {
        // 1. Check User
        const { email, password } = req.body
        var user = await User.findOneAndUpdate({ email }, { new: true })
        // console.log(user)
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                // console.log("password invalid")
                return res.send('password Invalid!!').status(400)
            }
            // 2.Payload
            var payload = {
                user: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    phone: user.phone,
                    email: user.email,
                    role: user.role,
                    address: user.address,
                }
            }
            // 3. Generate token
            jwt.sign(payload, 'jwtsecret', { expiresIn: '1d' }, (err, token) => {
                if (err) throw err;
                res.json({ token, payload })
            })

        } else {
            return res.send('User not found!!!').status(400)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.Checkuser = async (req, res) => {
    try {
        // const id = req.params.id
        const listuser = await User.find({}).exec()
        res.send(listuser)
    }
    catch (err) {
        res.status(500).send('Checkuser error')
    }
}

exports.update = async (req, res) => {
    try {
        const user_email = req.body.email
        // console.log(user_email)
        const updated = await User
            .findOneAndUpdate({ email: user_email }, req.body, { new: true })
            .exec()
        
        res.send(updated)
    }catch(err){
        console.log(err)
        res.status(500).send('u_update Error')
    }
}