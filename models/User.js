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
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    fcm_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      default: sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()'),
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authenticate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
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
  await User.sync();

  return User;
} 

module.exports = User;