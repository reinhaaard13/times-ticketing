const { DataTypes } =  require("sequelize");

module.exports = async (sequelize) => {

  const Ticket = sequelize.define("Ticket", {
    ticket_id: {
      type: DataTypes.INTEGER(4).ZEROFILL,
      autoIncrement: true,
      primaryKey: true,
      // defaultValue: 1
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
    project: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subproject: {
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
      allowNull: false,
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
      defaultValue: 'OPEN'
    }
  }, {
    createdAt: 'created_date',
    updatedAt: 'modified_date',
  })
  await Ticket.sync({ alter:true });

  return Ticket;
}