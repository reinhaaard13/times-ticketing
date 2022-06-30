import dbConnect from "../../../lib/dbConnect";

import CaseSubject from "../../../models/CaseSubject";

export default async function handler(req, res) {
	const sequelize = await dbConnect();

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
