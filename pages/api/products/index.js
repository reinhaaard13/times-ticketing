const sequelize = require("../../../lib/dbConnect");

const Product = require("../../../models/Product");
const Subproduct = require("../../../models/Subproduct");

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			const products = await Product(sequelize);
			const subproducts = await Subproduct(sequelize);
			products.hasMany(subproducts, {
				foreignKey: "product_id",
				as: "subproducts",
			});
			subproducts.belongsTo(products, { foreignKey: "product_id" });
			const results = await products.findAll({
				include: { model: subproducts, as: "subproducts" },
			});
			return res.json(results);
		case "POST":
			const { product_name, product_desc } = req.body;
			try {
				const product = await Product(sequelize);
				const result = await product.create({ product_name, product_desc });
				return res.status(201).json(result);
			} catch (e) {
				return res.status(500).json(e);
			}
	}
}
