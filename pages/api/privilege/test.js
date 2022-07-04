const sequelize = require("../../../lib/dbConnect");

const Privilege = require("../../../models/Privilege");

export default async function handler(req, res) {
  try {
    const privilege = await Privilege(sequelize);
    const result = await privilege.findAll({})
    return res.status(200).json(result)
  } catch (e) {
    console.log("error", e)
    return res.status(400).json({ error: e.message })
  }

}