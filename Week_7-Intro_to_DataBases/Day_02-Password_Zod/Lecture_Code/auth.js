const jwt = require('jsonwebtoken');
const { z } = require('zod');
const JWT_SECRET = 's3cret';

function auth(req, res, next) {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(403).json({
			message: 'Please provide a Token in Authorization Header',
		});
	}

	try {
		const response = jwt.verify(token, JWT_SECRET);

		if (!response) {
			return res.status(403).json({
				message: 'Incorrect credentials',
			});
		}

		req.userEmail = response.email;
		next();
	} catch (error) {
		console.error('Token verification error:', error); // Debug line
		res.status(403).json({ message: 'Invalid token' });
	}
}

const userSignupValid = z.object({
	name: z
		.string()
		.min(3, 'Please enter a valid name with at least 3 characters')
		.max(100, 'Name cannot exceed 100 characters'),
	email: z.string().email(),
	password: z
		.string()
		.min(6, 'Password must be at least 6 characters long')
		.max(25, "Password can't exceed 25 characters")
		.regex(/[a-z]/, 'Please enter at least one lowercase letter')
		.regex(/[A-Z]/, 'Please enter at least one uppercase letter')
		.regex(/\d/, 'Please enter at least one number')
		.regex(/[\W_]/, 'Please enter at least one special character'),
});
const userSigninValid = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(6, 'Password must be at least 6 characters long')
		.max(25, "Password can't exceed 25 characters")
		.regex(/[a-z]/, 'Please enter at least one lowercase letter')
		.regex(/[A-Z]/, 'Please enter at least one uppercase letter')
		.regex(/\d/, 'Please enter at least one number')
		.regex(/[\W_]/, 'Please enter at least one special character'),
});

const todoValid = z.object({
	title: z
		.string()
		.min(3, 'Title must be at least 3 characters')
		.max(100, 'Title cannot exceed 100 characters'),
	done: z.boolean(),
});

module.exports = {
	jwt,
	auth,
	JWT_SECRET,
	userSigninValid,
	userSignupValid,
	todoValid,
};
