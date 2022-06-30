import dbConnect from "../../../lib/dbConnect";

import CaseSubject from "../../../models/CaseSubject"

export default async function handler (req,res) {
  const sequelize = await dbConnect();

  switch (req.method) {
    case "GET":
      const csid = req.query.csid;
      try {
        const caseSubject = await CaseSubject(sequelize);
        const result = await caseSubject.findOne({
          where: {
            csid
          }
        });
        return res.status(200).json({caseSubject: result});
      } catch (e) {
        return res.status(500).json({ error: e.message });
      }
  }
}