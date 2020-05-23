const User = require('../model/User')
module.exports = {

    async index(req,res) {
        const {id} = req.params
        const user = await User.findAll();
        
        return res.json({user})
    },
    async store(req, res) {
        const {name, email} = req.body;

        const user = await User.create({
            name, email
        }).then(console.log('cadastrou'))
        .catch((error)=> console.log(error))

        return res.json(user)
    }
}