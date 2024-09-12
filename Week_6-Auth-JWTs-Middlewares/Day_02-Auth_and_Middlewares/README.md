<h1 style="text-align: center;">Week 6, Day 2: "Authentication and Middleware in a Node.js Application."</h1>

<p>This guide covers the implementation of authentication and middleware in a Node.js application. The main focus is on user authentication using JSON Web Tokens (JWT) and the use of middleware for securing routes and managing user-specific data.</p>

<h2>Topics Covered</h2>
<ul>
    <li><strong>Authentication with JWT:</strong> Implementing user authentication using JSON Web Tokens for secure login and session management.</li>
    <li><strong>Password Hashing:</strong> Using bcrypt to securely hash passwords before storing them.</li>
    <li><strong>Middleware for Route Protection:</strong> Creating middleware to verify JWTs and secure API routes.</li>
    <li><strong>User-Specific Data Management:</strong> Managing TODO items specific to each user with CRUD operations.</li>
    <li><strong>Frontend Integration:</strong> Building a simple user interface for signup, signin, and TODO management using HTML and JavaScript.</li>
</ul>

<h2>Structure</h2>
<p>The setup is divided into two main parts:</p>
<ul>
    <li><strong>Frontend (Authentication and TODO Management):</strong> Found in the <code>public</code> folder, it provides the user interface for signup, signin, viewing TODO items, and logging out.</li>
    <li><strong>Backend (Authentication and TODO API):</strong> Located in the root folder, it handles user authentication, password hashing, and TODO item management using JWT and middleware.</li>
</ul>

<h2>Frontend Code (public/index.html)</h2>
<p>This HTML file provides a user interface for authentication and TODO management. Key features include:</p>
<ul>
    <li><strong>Signup and Signin Forms:</strong> Forms for user registration and login.</li>
    <li><strong>TODO Management:</strong> Ability to create, update, delete, and view TODO items after authentication.</li>
    <li><strong>JavaScript Functionality:</strong> Includes functions for handling user authentication and TODO operations using Axios for API requests.</li>
</ul>

<h3>Key JavaScript Functions</h3>
<ul>
    <li><strong>signup:</strong> Handles user registration.</li>
    <li><strong>signin:</strong> Handles user login and stores JWT in localStorage.</li>
    <li><strong>showTodos:</strong> Fetches and displays TODO items for the authenticated user.</li>
    <li><strong>createTodo:</strong> Adds a new TODO item.</li>
    <li><strong>updateTodoText:</strong> Updates the text of an existing TODO item.</li>
    <li><strong>updateTodo:</strong> Updates the status of an existing TODO item.</li>
    <li><strong>deleteTodo:</strong> Deletes a TODO item.</li>
    <li><strong>logout:</strong> Logs out the user by removing the token from localStorage.</li>
</ul>

<h2>Backend Code (index.js)</h2>
<p>This file contains the server-side code using Express.js. Key features include:</p>
<ul>
    <li><strong>User Signup:</strong> Allows users to register with hashed passwords using bcrypt.</li>
    <li><strong>User Signin:</strong> Authenticates users and issues JWTs upon successful login.</li>
    <li><strong>Authentication Middleware:</strong> Middleware function to verify JWT and secure routes.</li>
    <li><strong>TODO Management:</strong> CRUD operations for TODO items, specific to each user.</li>
</ul>

<h3>Key Routes</h3>
<ul>
    <li><strong>/signup:</strong> POST request to register a new user.</li>
    <li><strong>/signin:</strong> POST request to authenticate a user and return a JWT.</li>
    <li><strong>/todos:</strong> GET request to fetch TODO items, POST request to create a new TODO.</li>
    <li><strong>/todos/:index:</strong> PATCH request to update a TODO item, DELETE request to remove a TODO item.</li>
</ul>

<h2>Setup and Installation</h2>
<ol>
    <li>Clone the repository to your local machine.</li>
    <li>Navigate to the directory and install dependencies:</li>
    <pre><code>npm install</code></pre>
    <li>Start the server:</li>
    <pre><code>node index.js</code></pre>
    <li>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to access the application.</li>
</ol>

<h2>Additional Information</h2>
<p>This setup uses the following technologies:</p>
<ul>
    <li><strong>Node.js:</strong> JavaScript runtime for the server-side code.</li>
    <li><strong>Express.js:</strong> Web framework for handling HTTP requests.</li>
    <li><strong>JWT:</strong> JSON Web Tokens for secure authentication.</li>
    <li><strong>Bcrypt:</strong> Library for password hashing.</li>
    <li><strong>Axios:</strong> HTTP client for making API requests from the frontend.</li>
</ul>

<p>For further details, refer to the code and comments provided in the respective files.</p>
