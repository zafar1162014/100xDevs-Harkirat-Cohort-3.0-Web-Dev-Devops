<h1>Week 7 Day 2: SecureTodo - JWT Auth with Bcrypt, Zod Validation, and MongoDB</h1>

<h2>Overview</h2>
<p>
In Week 7 Day 2 of the cohort, we focused on building a secure backend system for managing a Todo list application. The key concepts covered include user authentication using JWT, password hashing with Bcrypt, input validation with Zod, and storing data using MongoDB with Mongoose.
</p>

<h2>What I Learned</h2>
<ul>
  <li><strong>Express.js:</strong> How to set up a server, handle routes for user authentication (signup, signin), and manage protected routes for todo creation, deletion, and updates.</li>
  <li><strong>JWT (JSON Web Token):</strong> Implementing authentication and authorization using JWT tokens to secure endpoints.</li>
  <li><strong>Bcrypt:</strong> How to hash user passwords to store them securely in a database, ensuring sensitive data is protected.</li>
  <li><strong>Zod:</strong> Leveraging Zod for request body validation, ensuring incoming data meets the expected structure and constraints.</li>
  <li><strong>MongoDB & Mongoose:</strong> Connecting to MongoDB, defining schemas for users and todo items, and performing CRUD operations (Create, Read, Update, Delete).</li>
</ul>

<h2>Key Code Sections</h2>
<p>Below are the main features implemented in this session:</p>
<ul>
  <li><strong>Signup Route:</strong> Processes user signup by validating input data using Zod, hashing passwords with Bcrypt, and storing user information in MongoDB.</li>
  <li><strong>Signin Route:</strong> Handles user login by verifying credentials, comparing hashed passwords, and returning a JWT token for session management.</li>
  <li><strong>Protected Todo Routes:</strong> Using JWT authentication middleware to secure routes, allowing only authenticated users to create, view, update, and delete their todos.</li>
  <li><strong>Zod Validation:</strong> Ensuring that all incoming requests for signup, signin, and todo actions are validated to prevent incorrect data from being processed.</li>
</ul>

<h2>Conclusion</h2>
<p>
By the end of Week 7 Day 2, I learned how to build a secure backend for a Todo app using essential technologies like JWT for authentication, Bcrypt for password hashing, Zod for validation, and MongoDB for persistent storage. This knowledge is crucial for developing robust, real-world applications that prioritize security and data integrity.
</p>
