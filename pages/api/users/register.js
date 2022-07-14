const sequelize = require('../../../lib/dbConnect');

const User = require('../../../models/User');

export default async function handler(req, res) {
  const { name, email, password, username, phone } = req.body;

  let hashedPassword
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }

  try {
    const user = await User(sequelize);
    const newUser = await user.create({
      name,
      email,
      password: hashedPassword,
      username,
      phone,
      role: "Administrator",
      token: "",
      
    })
  } catch (error) {
    
  }


}