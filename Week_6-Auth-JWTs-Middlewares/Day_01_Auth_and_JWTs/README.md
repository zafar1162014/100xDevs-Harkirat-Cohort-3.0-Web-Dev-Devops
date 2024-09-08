<h1 align='center'>Week 6 Day 1: Auth and JWTs Confirmation</h1>

<h2>Overview</h2>
<p>This project focuses on implementing user authentication using JSON Web Tokens (JWTs). We explore various methods of user authentication, secure token generation, and validation using JWTs in an Express.js environment. The project also involves validating user input using the Zod library and managing users with file-based storage.</p>

<h2>Contents</h2>
<ul>
  <li><a href="#basic-authentication">Basic Authentication API</a></li>
  <li><a href="#jwt-authentication">JWT Authentication</a></li>
  <li><a href="#improving-authentication">Improving the Authentication API</a></li>
  <li><a href="#auth-and-middleware">Auth and Middleware</a></li>
</ul>

<h2 id="basic-authentication">Basic Authentication API</h2>
<p>This section introduces a basic authentication API using a simple token-based approach. The code demonstrates how to handle user sign-up and sign-in, along with a route to retrieve user details after authentication.</p>

<h3>Key Features</h3>
<ul>
  <li>Random token generation for user sessions.</li>
  <li>Simple in-memory user management.</li>
  <li>API endpoints for sign-up, sign-in, and retrieving user information.</li>
</ul>

<h3>Example Endpoints</h3>
<ul>
  <li><code>POST /signup</code> - Registers a new user.</li>
  <li><code>POST /signin</code> - Signs in an existing user and generates a token.</li>
  <li><code>GET /me</code> - Retrieves information about the authenticated user.</li>
</ul>

<h2 id="jwt-authentication">JWT Authentication</h2>
<p>This section focuses on implementing authentication using JSON Web Tokens (JWTs). It improves upon the basic authentication API by generating and verifying JWTs to secure user sessions.</p>

<h3>Key Features</h3>
<ul>
  <li>Secure token generation using JWTs.</li>
  <li>In-memory user management with tokens.</li>
  <li>Endpoints to handle sign-up, sign-in, and token-based authentication.</li>
</ul>

<h3>Example Endpoints</h3>
<ul>
  <li><code>POST /signup</code> - Registers a new user.</li>
  <li><code>POST /signin</code> - Signs in an existing user and returns a JWT token.</li>
  <li><code>GET /me</code> - Retrieves user information based on the provided JWT token.</li>
</ul>

<h2 id="improving-authentication">Improving the Authentication API</h2>
<p>This section involves refining the authentication API by implementing input validation using the Zod library and managing users with file-based storage.</p>

<h3>Key Features</h3>
<ul>
  <li>Input validation using <code>Zod</code> for both username and password.</li>
  <li>File-based storage for persisting user data.</li>
  <li>Enhanced error handling and response messages.</li>
</ul>

<h3>Example Endpoints</h3>
<ul>
  <li><code>POST /signup</code> - Registers a new user with validation.</li>
  <li><code>POST /signin</code> - Signs in an existing user and returns a JWT token.</li>
  <li><code>GET /me</code> - Retrieves user information with token validation.</li>
</ul>

<h2 id="auth-and-middleware">Auth and Middleware</h2>
<p>This section introduces middleware for handling authentication, using JWTs for token verification and user authorization. The <code>auth</code> middleware ensures that only authorized users can access certain routes.</p>

<h3>Key Features</h3>
<ul>
  <li>Middleware-based authentication using JWTs.</li>
  <li>Custom middleware for token validation and error handling.</li>
  <li>Secure endpoint protection using the <code>auth</code> middleware.</li>
</ul>

<h3>Example Endpoints</h3>
<ul>
  <li><code>POST /signup</code> - Registers a new user with validation.</li>
  <li><code>POST /signin</code> - Signs in an existing user and returns a JWT token.</li>
  <li><code>GET /me</code> - Protected route to retrieve user information, accessible only to authenticated users.</li>
</ul>

<h2>How to Explore</h2>
<p>To explore the project, follow these steps:</p>
<ol>
  <li>Clone the repository from GitHub.</li>
  <li>Navigate to the project directory and run <code>npm install</code> to install the dependencies.</li>
  <li>Start the server with <code>node index.js</code>.</li>
  <li>Use Postman or any API client to test the API endpoints.</li>
</ol>

<h2>Author</h2>
<p>Created by &copy;Muhammad Zafar Ul Haq. This project is a part of Week 6, Day 1 exercises for learning and implementing authentication using JWTs in Express.js.</p>
