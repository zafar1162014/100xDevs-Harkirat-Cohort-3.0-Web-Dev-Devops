#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { Command } from 'commander';

const program = new Command();
const TODOS_FILE = path.join(process.cwd(), 'todos.json');

function readTodos() {
	if (!fs.existsSync(TODOS_FILE)) {
		return [];
	}
	const data = fs.readFileSync(TODOS_FILE, 'utf8');
	return JSON.parse(data);
}

function writeTodos(todos) {
	fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
}

program
	.name('todo-cli')
	.description('CLI to manage your todo list')
	.version('1.0.0');

program
	.command('add <task>')
	.description('Add a new todo')
	.action((task) => {
		const todos = readTodos();
		const newTodo = {
			id: String(todos.length + 1),
			task,
			done: false,
		};
		todos.push(newTodo);
		writeTodos(todos);
		console.log(`Added new todo: "${task}"`);
	});

program
	.command('delete <task>')
	.description('Delete a todo by task')
	.action((task) => {
		let todos = readTodos();
		const index = todos.findIndex((todo) => todo.task === task);
		if (index !== -1) {
			todos.splice(index, 1);
			writeTodos(todos);
			console.log(`Deleted todo: "${task}"`);
		} else {
			console.log(`Todo: "${task}" not found.`);
		}
	});

program
	.command('done <task>')
	.description('Mark a todo as done by task')
	.action((task) => {
		const todos = readTodos();
		const todo = todos.find((todo) => todo.task === task);
		if (todo) {
			todo.done = true;
			writeTodos(todos);
			console.log(`Marked todo: "${task}" as done`);
		} else {
			console.log(`Todo: "${task}" not found`);
		}
	});

program
	.command('list')
	.description('List all todos')
	.action(() => {
		const todos = readTodos();
		if (todos.length === 0) {
			console.log('No todos found.');
		} else {
			todos.forEach((todo, index) => {
				const status = todo.done ? '[x]' : '[ ]';
				console.log(`${status} ${todo.id}: ${todo.task}`);
			});
		}
	});

program.parse(process.argv);
