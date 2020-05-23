const { Model, DataTypes } = require('sequelize')


class Tech extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING
        },{
            sequelize,
            tableName: 'techs'
        })
    }

    static associate(models){
        this.belongsToMany(models.User, {foreignKey: 'tech_id', through: 'user_techs', as: 'users'});
        // this.hasMany(models.UserTech, {foreignKey: 'tech_id', as: 'usertechs'})        
    }


}

module.exports = Tech