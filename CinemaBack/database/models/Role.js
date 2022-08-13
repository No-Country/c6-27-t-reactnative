module.exports = (sequelize, dataTypes) => {
  let alias = 'Role'
  let cols = {
    roleId: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: dataTypes.STRING(20), allowNull: false }
  }
  let config = {
    tableName: 'role',
    timestamps: false
  }

  const Model = sequelize.define(alias, cols, config)

  Model.associate = (models) => {
    Model.belongsTo(models.Role, {
      as: 'role',
      foreignKey: 'roleId'
    })
  }

  return Model
}
