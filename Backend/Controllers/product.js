exports.read = async (req, res) =>{
    res.send('Hello Controller Read')
}

exports.list = async(req, res) =>{
    try{
        res.send('Hello Controller list')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.create = async(req, res) =>{
    try{
        res.send('Hello Controller Create')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.update = async(req, res) =>{
    try{
        res.send('Hello Controller Update')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.remove = async(req, res) =>{
    try{
        res.send('Hello Controller Remove')
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}