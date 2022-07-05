const sequelize = require("../../../lib/dbConnect");

const Subproduct = require("../../../models/Subproduct");

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			const subproducts = await Subproduct(sequelize);
			const results = await subproducts.findAll();
			return res.json(results);
		case "POST":
			const { product_id, subproduct_name, subproduct_desc } = req.body;
			try {
				const subproduct = await Subproduct(sequelize);
				const result = await subproduct.create({
					product_id,
					subproduct_name,
					subproduct_desc,
				});
				return res.status(201).json(result);
			} catch (e) {
				return res.status(500).json(e);
			}
	}
}
