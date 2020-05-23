const Tech = require('../model/Tech')
const User = require('../model/User')


module.exports = {

    async index(req, res) {

        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: {
                association: 'techs',
                through: {
                    attributes: []
                }
            }
        });

        if (!user_id) {
            return res.status(400).json({ erro: "User not found" });
        }



        return res.json(user.techs);

    },

    async store(req, res) {

        const { user_id } = req.params;

        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ erro: "User not Found" });
        }

        const [tech] = await Tech.findOrCreate({
            where: { name }
        })
        const tech_id = tech.id;

        // await UserTech.create({
        //     user_id,
        //     tech_id
        // })

        await user.addTech(tech)

        return res.json(tech);

    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ erro: "User not found" });
        }

        const tech = await Tech.findOne({
            where: { name }
        })

        await user.removeTech(tech);

        return res.json();
    }


}