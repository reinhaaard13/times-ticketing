import sequelize from "../../../lib/dbConnect";

import CaseSubject from "../../../models/CaseSubject";

export default async function handler(req, res) {
	const csid = req.query.csid;

	switch (req.method) {
		case "GET":
			try {
				const caseSubject = await CaseSubject(sequelize);
				const result = await caseSubject.findOne({
					where: {
						id: csid,
					},
				});
				return res.status(200).json({ caseSubject: result });
			} catch (e) {
				return res.status(500).json({ error: e.message });
			}
			break;
		case "PATCH":
			try {
				const caseSubject = await CaseSubject(sequelize);
				const result = await caseSubject.update(req.body, {
					where: {
						id: csid,
					},
				});
				return res.status(200).json({ caseSubject: result });
			} catch {
				return res.status(500).json({ error: e.message });
			}
			break;
		case "DELETE":
			try {
				const caseSubject = await CaseSubject(sequelize);
				const result = await caseSubject.destroy({
					where: {
						id: csid,
					},
				});
				return res.status(200).json({ result });
			} catch (e) {
				return res.status(500).json({ error: e.message });
			}
			break;
    default:
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
	}
}
