import nextConnect from "next-connect";
import multer from "multer";

const { v1: uuid } = require("uuid");
const sequelize = require("../../../lib/dbConnect");

const Ticket = require("../../../models/Ticket");

const upload = multer({
	storage: multer.diskStorage({
		destination: "./public/uploads",
		filename: (req, file, cb) => {
			if (!file) {
				return cb(null, "");
			}
			return cb(null, uuid() + "." + file.originalname.split(".").pop());
		},
	}),
});

const newticket = nextConnect({
	onError: (err, req, res) => {
		console.log(err);
		res.status(500).send(err);
	},
	onNoMatch: (req, res) => {
		res.status(404).send("Not found");
	},
});

newticket.use(upload.single("attachment"));

newticket.post(async (req, res) => {

	const {
		location,
		cust_name,
		cust_no,
		cust_email,
		project,
		subproject,
		assigned_to,
		department,
		casesubject,
		description,
	} = req.body;

	try {
		const ticket = await Ticket(sequelize);
		const newTicket = await ticket.create({
			location,
			cust_name,
			cust_no,
			cust_email,
			project,
			subproject,
			assigned_to,
			department,
			casesubject,
			description,
			attachment: req.file?.path,
			created_by: "admin",
		});
		return res.status(200).json({ newTicket });
	} catch (error) {
		console.log(error);
		return res.status(400).json({ error: error.message });
	}

	res.send("OK");
});

export default newticket;

export const config = {
	api: {
		bodyParser: false,
	},
};
