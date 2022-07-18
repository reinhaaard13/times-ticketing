import { DataTypes } from "sequelize";

const User = async (sequelize) => {

  const User = sequelize.define("User", {
    user_id: {
      type: DataTypes.INTEGER(11).ZEROFILL,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    refreshToken: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    fcm_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_login: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true,
      default: sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authenticate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modified_by: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    createdAt: 'created_date',
    updatedAt: 'modified_date',
    indexes: [
      {
        fields: ['username', 'role', 'email']
      }
    ]
  })
  await User.sync({ alter: true });

  return User;
} 

module.exports = User;