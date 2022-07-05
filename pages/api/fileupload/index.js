// import formidable from "formidable";

// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

// export default async function handler(req, res) {
// 	const form = new formidable.IncomingForm();
// 	form.uploadDir = "./uploads";
// 	form.keepExtensions = true;
// 	form.parse(req, (err, fields, files) => {
// 		console.log(err, fields, files);
// 		res.send(err || "OK")
// 	});
// }
