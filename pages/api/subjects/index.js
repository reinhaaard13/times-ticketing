const sequelize = require("../../../lib/dbConnect");

const CaseSubject = require("../../../models/CaseSubject");

export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			try {
				const caseSubject = await CaseSubject(sequelize);
        const subjects = await caseSubject.findAll();
				res.status(200).json({ subjects });
			} catch (e) {
        res.status(400).json({ error: e.message });
      }
      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
      break;
	}
}
