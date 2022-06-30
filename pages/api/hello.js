import dbConnect from "../../lib/dbConnect"

import CaseSubject from "../../models/CaseSubject"

export default async function handler(req, res) {
  const sequelize = await dbConnect();

  try {
    const caseSubject = await CaseSubject(sequelize);
    const subjects = await caseSubject.findAll()
    console.log(subjects);
  } catch (e) {
    console.log(e);
  }

  res.status(200).json({ name: 'John Doe' })
}
