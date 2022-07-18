const sequelize = require('../../../lib/dbConnect');

const Role = require('../../../models/Role');

export default async function handler (req, res) {


  switch(req.method) {
    case 'GET':
      const role = await Role(sequelize)
      const allRoles = await role.findAll({
        attributes: ['role_id', 'role_name']
      });
      return res.status(200).json(allRoles);
      break;
    default:
      return res.status(405).json({
        message: 'Method not allowed'
      });
  }
}