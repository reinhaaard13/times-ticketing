import { Sequelize, DataTypes } from "sequelize";

const CaseSubject = async (sequelize) => {

  const CaseSubject = sequelize.define("CaseSubject", {
    id: {
      type: DataTypes.INTEGER(4).ZEROFILL,
      primaryKey: true,
      autoIncrement: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    severity: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  await CaseSubject.sync({ alter: true });

  return CaseSubject;
} 

module.exports = CaseSubject;