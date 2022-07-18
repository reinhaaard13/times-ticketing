const sequelize = require("../../../lib/dbConnect");
const User = require("../../../models/User");
const Role = require("../../../models/Role");
const RolePrivilege = require("../../../models/RolePrivilege");
const Privilege = require("../../../models/Privilege");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Op } = require('sequelize')

export default async function handler(req, res) {
	const { user, password } = req.body;

	switch (req.method) {
		case "POST":
			let foundUser;
			try {
        const _user = await User(sequelize);
				foundUser = await _user.findOne({
					where: {
						[Op.or]: [{ username: user }, { email: user }],
					},
				});
				if (!foundUser) {
					throw new Error("User not found");
				}
			} catch (error) {
				return res.status(401).json({ message: error.message });
			}

			try {
				const isValidPassword = await bcrypt.compare(
					password,
					foundUser.password
				);
				if (!isValidPassword) {
					throw new Error("Wrong password");
				}
			} catch {
				return res.status(401).json({
					message: "Invalid password",
				});
			}

			const token = jwt.sign(
				{ userId: foundUser.id, role: foundUser.role },
				process.env.JWT_SECRET,
				{ expiresIn: "1h" }
			);

			let privileges

			try {
				const _role = await Role(sequelize);
				const _privilege = await Privilege(sequelize);
				const _rolePrivilege = await RolePrivilege(sequelize);
				_role.belongsToMany(_privilege, { through: _rolePrivilege, foreignKey: "role_id" });
				_privilege.belongsToMany(_role, { through: _rolePrivilege, foreignKey: "privilege_id" });

				privileges = await _role.findOne({
					where: {
						role_id: foundUser.role,
					},
					include: [
						{
							model: _privilege,

						}
					],
				});

			} catch (error) {
				return res.status(401).json({ message: error.message });
			}

      return res.status(200).json({
        token,
        user: {
          id: foundUser.id,
          username: foundUser.username,
          name: foundUser.name,
        },
        role: foundUser.role,
				privileges: privileges.Privileges.map(privilege => privilege.privilege_id),
      })
	}
}
