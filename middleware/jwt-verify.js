const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
	if (req.method === "OPTIONS") {
		return;
	}

	try {
		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			throw new Error("No token provided");
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.userData = { user_id: decoded.user_id };
		return;
	} catch (error) {
		throw new Error("Invalid token");
	}
};
