module.exports = (sequelize, dataTypes) => {

    let alias = "User";
    let cols = {
       userId: {type: dataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
       roleId: {type: dataTypes.INTEGER, allowNull: false }, 
       username: { type: dataTypes.STRING(100), allowNull: false},       
       password: {type: dataTypes.STRING(100), allowNull: false },       
       connect: {type: dataTypes.BOOLEAN, allowNull: false, defaultValue: false },       
     };
     let config = {
       tableName: 'user',
       timestamps: false
     };
    
    const Model = sequelize.define(alias, cols, config);

    Model.associate = models => {
      
      Model.belongsTo(models.Role, {
        as: 'role',
        foreignKey: 'roleId'
    })
  }
    
    return Model;    
    }