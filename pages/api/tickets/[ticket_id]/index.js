const sequelize = require("../../../../lib/dbConnect");

const Ticket = require("../../../../models/Ticket");
const CaseSubject = require("../../../../models/CaseSubject");
const Product = require("../../../../models/Product");
const SubProduct = require("../../../../models/SubProduct");
const jwt_verify = require("../../../../middleware/jwt-verify");


export default async function handler(req, res) {
	const ticket_id = req.query.ticket_id;
	
	// try {
	// 	jwt_verify(req, res);
	// } catch (error) {
	// 	return res.status(401).json({ error: error.message });
	// }

	switch (req.method) {
		case "GET":
			try {
				const ticket = await Ticket(sequelize);
				const caseSubject = await CaseSubject(sequelize);
				const product = await Product(sequelize);
				const subProduct = await SubProduct(sequelize);
				ticket.hasOne(caseSubject, {
					foreignKey: "id",
					sourceKey: "casesubject",
				});
				ticket.hasOne(product, {
					foreignKey: "product_id",
					sourceKey: "product",
				});
				ticket.hasOne(subProduct, {
					foreignKey: "subproduct_id",
					sourceKey: "subproduct",
				});

				const matchedTicket = await ticket.findOne({
					where: { ticket_id: ticket_id },
					include: [
						{ model: caseSubject, attributes: ["subject", "severity"] },
						{ model: product, attributes: ["product_name"] },
						{ model: subProduct, attributes: ["subproduct_name"] },
					],
				});
				return res.status(200).json({ ticket: matchedTicket });
			} catch (error) {
				return res.status(400).json({ error: error.message });
			}
			break;
		default:
			return res.status(405).json({ error: "Method not allowed" });
	}
}
