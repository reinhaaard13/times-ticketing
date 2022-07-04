const sequelize = require("../../../lib/dbConnect");

const Role = require("../../../models/Role");

export default async function handler(req, res) {
  try {
    const role = await Role(sequelize);
    const result = await role.findAll({
      include: [
        {
          model: sequelize.models.Privilege,
        }
      ]
    })
    return res.json(result)
  } catch (e) {
    console.log("error", e)
    return res.status(400).json({ error: e.message })
  }
}