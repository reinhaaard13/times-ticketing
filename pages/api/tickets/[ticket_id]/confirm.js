const sequelize = require("../../../../lib/dbConnect");

const Ticket = require("../../../../models/Ticket");

export default async function handler(req, res) {
	const ticket_id = req.query.ticket_id;

	switch (req.method) {
		case "PATCH":
			try {
				const ticket = await Ticket(sequelize);
				const updatedTicket = await ticket.update(
					{ status: "PROGRESS" },
					{ where: { ticket_id: ticket_id } }
				);
				return res.status(200).json({ updatedTicket });
			} catch (error) {
				return res.status(400).json({ error: error.message });
			}
		default:
			return res.status(405).json({ error: "Method not allowed" });
	}
}
