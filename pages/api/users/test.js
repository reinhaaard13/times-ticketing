import dbConnect from "../../../lib/dbConnect";

import User  from "../../../models/User";

export default async function handler(req, res) {
  const sequelize = await dbConnect();

  try {
    const user = await User(sequelize);
    const result = user.findAll()
    return res.json(result)
  } catch (e) {
    console.log("error", e)
  }

}