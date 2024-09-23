const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

//user Database
const userSchema = new Schema({
	email: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
});

// admin Database
const adminSchema = new Schema({
	email: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
});

// Course Database

const courseSchema = new Schema({
	title: String,
	description: String,
	price: Number,
	imageUrl: String,
	creatorId: ObjectId,
});

// purchase Datase

const purchaseSchema = new Schema({
	userId: ObjectId,
	courseId: ObjectId,
});

//
const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

// exports the model
module.exports = {
	userModel,
	adminModel,
	courseModel,
	purchaseModel,
};
