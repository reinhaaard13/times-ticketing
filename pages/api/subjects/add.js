import dbConnect from "../../../lib/dbConnect";

import CaseSubject from "../../../models/CaseSubject";

export default async function handler(req, res) {
  const sequelize = await dbConnect();

  switch (req.method) {
    case "POST":
      const { subject, severity } = req.body;
      try {
        const caseSubject = await CaseSubject(sequelize);
        const newSubject = await caseSubject.create({ subject, severity });
        return res.status(200).json({ newSubject });
      } catch (e) {
        return res.status(400).json({ error: e.message });
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}