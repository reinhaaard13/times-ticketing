import dbConnect from "../../lib/dbConnect"

import CaseSubject from "../../models/CaseSubject"

export default async function handler(req, res) {


  res.status(200).json({ message: 'Hello World!' })
}
