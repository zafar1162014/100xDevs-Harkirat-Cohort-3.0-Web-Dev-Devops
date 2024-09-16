const jwt = require('jsonwebtoken');
const JWT_SECRET = 'S3cret';

function auth(req, res, next) {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(403).json({ message: 'No token provided' });
	}
	try {
		const deconded = jwt.verify(token, JWT_SECRET);
		req.userId = deconded.userId;
		req.userEmail = deconded.email;
		next();
	} catch (error) {
		res.status(403).json({ message: 'Invalid token' });
	}
}
module.exports = {
	auth,
	JWT_SECRET,
};
