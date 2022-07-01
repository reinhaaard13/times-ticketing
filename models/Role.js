const { DataTypes } =  require("sequelize");

module.exports = async (sequelize) => {

  const Role = sequelize.define("Role", {
    role_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_level: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modified_by: {
      type: DataTypes.STRING,
      default: null,
    }
  }, {
    createdAt: 'created_date',
    updatedAt: 'modified_date',
    freezeTableName: true,
    indexes: [{
      // name: 'role_level',
      fields: ['role_level']
    }]
  })
  await Role.sync({ alter: true });

  return Role;
}