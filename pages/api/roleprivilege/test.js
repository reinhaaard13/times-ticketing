const sequelize = require("../../../lib/dbConnect");

import RolePrivilege from "../../../models/RolePrivilege";

export default async function handler(req, res) {	
  const rolePrivilege = await RolePrivilege(sequelize).then((model) => {
    return model.findAll()
  })
  res.status(200).json(rolePrivilege);
}
