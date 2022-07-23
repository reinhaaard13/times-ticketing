import nextConnect from "next-connect";
import multer from "multer";

const { v1: uuid } = require("uuid");
const sequelize = require("../../../lib/dbConnect");
const jwt_verify = require('../../../middleware/jwt-verify')

const Product = require("../../../models/Product");
const Subproduct = require("../../../models/Subproduct");
const CaseSubject = require("../../../models/CaseSubject");
const Ticket = require("../../../models/Ticket");

import { padStart } from "../../../helper/padStart";

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
		product,
		subproduct,
		assigned_to,
		department,
		casesubject,
		description,
	} = req.body;

	try {
		jwt_verify(req, res);
	} catch (error) {
		return res.status(401).json({ error: error.message });
	}

	try {
		const ticket = await Ticket(sequelize);
		const lastId = await ticket.max("id");
		const newId = lastId + 1;

		const _product = await Product(sequelize)
		const { product_name } = await _product.findOne({
			where: {
				product_id: product,
			},
		});

		const generatedId =
			product_name.substring(0, 3).toUpperCase() + padStart(newId, 4);

		const newTicket = await ticket.create({
			ticket_id: generatedId,
			location,
			cust_name,
			cust_no,
			cust_email,
			product,
			subproduct,
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
});

newticket.get(async (req, res) => {
	const limit = +req.query.limit || 10;
	const page = +req.query.page || 1;

	try {
		jwt_verify(req, res);
	} catch (error) {
		return res.status(401).json({ error: error.message });
	}

	try {
		const ticket = await Ticket(sequelize);
		const product = await Product(sequelize);
		const casesubject = await CaseSubject(sequelize);
		ticket.hasOne(product, {
			foreignKey: "product_id",
			sourceKey: "product",
		});
		ticket.hasOne(casesubject, {
			foreignKey: "id",
			sourceKey: "casesubject",
		});
		const { count, rows: tickets } = await ticket.findAndCountAll({
			include: [
				{ model: product, attributes: ["product_name"] },
				{ model: casesubject, attributes: ["subject", "severity"] },
			],
			limit,
			offset: (page - 1) * limit,
		});
		const nextlink =
			page * limit < count
				? `/api/tickets?limit=${limit}&page=${page+1}`
				: null;
		const prevlink =
			page > 1
				? `/api/tickets?limit=${limit}&page=${page - 1}`
				: null;
		return res.status(200).json({
			tickets,
			total: tickets.length,
			limit,
			page,
			count,
			next: nextlink,
			previous: prevlink,
		});
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
});

export default newticket;

export const config = {
	api: {
		bodyParser: false,
	},
};
