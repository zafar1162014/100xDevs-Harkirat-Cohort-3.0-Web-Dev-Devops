const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
	name: String,
	email: { type: String, unique: true },
	password: String,
});

const Todo = new Schema({
	userEmail: { type: String },
	title: String,
	done: Boolean,
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);
module.exports = {
	UserModel,
	TodoModel,
};
