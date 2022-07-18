const sequelize = require('../../../lib/dbConnect');
const bcrypt = require('bcrypt');

const User = require('../../../models/User');

export default async function handler(req, res) {
  const { name, email, password, username, phone, role } = req.body;

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
      role,
      created_by: 'Admin',
      modified_by: 'Admin'
    })
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

}