const { DataTypes } = require('sequelize');

module.exports = async (sequelize) => {
  const Product = sequelize.define('Product', {
    product_id: {
      type: DataTypes.INTEGER(4).ZEROFILL,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_desc: {
      type: DataTypes.STRING,
    }
  }, {
    createdAt: 'created_date',
    updatedAt: 'modified_date',
  })
  await Product.sync({ alter: true });

  return Product;
}