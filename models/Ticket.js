const { DataTypes } =  require("sequelize");

module.exports = async (sequelize) => {

  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.INTEGER(4).ZEROFILL,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cust_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subproduct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assigned_to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    casesubject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attachment: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modified_by: {
      type: DataTypes.STRING,
      default: null,
    },
    status: {
      type: DataTypes.STRING,
      enum: ["OPEN", "PROGRESS", "CLOSED"],
      defaultValue: 'OPEN'
    }
  }, {
    createdAt: 'created_date',
    updatedAt: 'modified_date',
    indexes: [
      {
        unique: true,
        fields: ['ticket_id']
      }
    ]
  })
  await Ticket.sync({ alter:true });

  return Ticket;
}