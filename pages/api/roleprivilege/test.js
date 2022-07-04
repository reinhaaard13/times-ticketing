const sequelize = require("../../../lib/dbConnect");

import RolePrivilege from "../../../models/RolePrivilege";
import Role from "../../../models/Role";

export default async function handler(req, res) {	
  const rolePrivilege = await RolePrivilege(sequelize)
  const role = await Role(sequelize)

  rolePrivilege.belongsTo(role, {
    foreignKey: "role_id",
    targetKey: "role_id",
    // as: "role"
  })

  const result = await rolePrivilege.findAll({
    include: [{
      model: role,
      // as: "role"
    }]
  })
  res.status(200).json(result);
}
