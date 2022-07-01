const { DataTypes } = require("sequelize");

module.exports = async (sequelize) => {

  const Privilege = sequelize.define("Privilege", {
    privilege_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    privilege_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    privilege_desc: {
      type: DataTypes.STRING,
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
  })
  await Privilege.sync({ alter: true });

  return Privilege;
};