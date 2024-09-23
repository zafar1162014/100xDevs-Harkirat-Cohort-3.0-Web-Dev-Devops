const { Router } = require('express');
const { userModel, purchaseModel, courseModel } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require('../config');
const { userMiddleware } = require('../middleware/user');

const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
	const { email, password, firstName, lastName } = req.body;

	//  user model
	await userModel.create({
		email,
		password,
		firstName,
		lastName,
	});
	res.status(200).json({
		message: 'Signup succeeded',
	});
});

userRouter.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	const user = await userModel.findOne({
		email,
		password,
	});
	if (user) {
		const token = jwt.sign(
			{
				id: user._id,
			},
			JWT_USER_PASSWORD
		);

		//
		res.status(200).json({
			token,
		});
	} else {
		res.status(403).json({
			message: 'incorrect credentials',
		});
	}
});

//
userRouter.get('/purchases', userMiddleware, async (req, res) => {
	const userId = req.userId;
	const purchases = await purchaseModel.find({
		userId,
	});
	let purchasedCourseIds = [];

	for (let i = 0; i < purchases.length; i++) {
		purchasedCourseIds.push(purchases[i].courseId);
	}
	const courseData = await courseModel.find({
		_id: { $in: purchasedCourseIds },
	});

	//
	res.status(200).json({
		purchases,
		courseData,
	});
});

module.exports = {
	userRouter,
};
