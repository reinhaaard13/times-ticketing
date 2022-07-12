const { DataTypes } = require("sequelize");

module.exports = async (sequelize) => {

  const Comment = sequelize.define("Comment", {
    comment_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    comment_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    createdAt: 'created_date',
    updatedAt: 'modified_date',
  })
  await Comment.sync({ alter: true });

  return Comment;
};