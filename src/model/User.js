const { Model, DataTypes} = require('sequelize');


class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Address, {foreignKey: 'user_id', as: 'addresses'})
        // this.hasMany(models.UserTech, {foreignKey: 'user_id', as: 'usertechs'})
        this.belongsToMany(models.Tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'});
       
    }
}

module.exports = User