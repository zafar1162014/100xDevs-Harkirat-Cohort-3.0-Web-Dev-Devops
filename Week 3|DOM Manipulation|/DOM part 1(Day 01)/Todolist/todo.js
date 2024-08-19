let currentIndex = 0;
function validateInput() {
	const inputField = document.querySelector('.input_block');
	const entertxt = inputField.value.trim();
	const hasNumbers = /\d/;
	const hasSpecialChars = /[^\w\s]/;

	// Check if the input is empty
	if (entertxt === '') {
		showAlert();
	}
	// Check if the input contains both numbers and special characters
	else if (hasNumbers.test(entertxt) && hasSpecialChars.test(entertxt)) {
		showAlert();
	} else if (hasSpecialChars.test(entertxt) || hasNumbers.test(entertxt)) {
		showAlert();
	} else {
		addToDo();
	}
}

function deleteTodo(index) {
	const element = document.querySelector(`#todo-${index}`).parentNode;

	if (element) {
		element.parentNode.removeChild(element);
	}
}

function addToDo() {
	const inputField = document.querySelector('.input_block');
	const entertxt = inputField.value.trim();
	if (entertxt === '') return;

	let newpara = document.createElement('p');
	newpara.setAttribute('id', 'todo-' + currentIndex);
	newpara.textContent = entertxt;

	let newbutton = document.createElement('button');
	newbutton.textContent = 'Remove';
	newbutton.classList.add('delete_button');
	newbutton.setAttribute('onclick', 'deleteTodo(' + currentIndex + ')');

	let newdiv = document.createElement('div');
	newdiv.classList.add('todo_item');
	newdiv.appendChild(newpara);
	newdiv.appendChild(newbutton);

	// Append the new todo item to the todoContainer
	document.getElementById('todoContainer').appendChild(newdiv);

	// Clear input after adding the todo
	inputField.value = '';
	currentIndex++;
}

function handleKeyDown(event) {
	if (event.key === 'Enter') {
		validateInput();
	}
}

// Function to show the alert box
function showAlert() {
	document.querySelector('.alert-box').style.display = 'block';
	document.querySelector('.overlay').style.display = 'block';
	const inputField = document.querySelector('.input_block');
	inputField.value = '';
}

// Function to close the alert box
function closeAlert() {
	document.querySelector('.alert-box').style.display = 'none';
	document.querySelector('.overlay').style.display = 'none';
}
