<h1>Week 8 Day 01</h1>

<p>This project is part of Week 8 Day 01 of our learning journey. It includes setting up an Express.js server with MongoDB for user and course management. Below is an overview of the key components covered this week.</p>

<h2>Project Overview</h2>
<ul>
  <li><strong>Authentication:</strong> JWT-based authentication for both users and admins.</li>
  <li><strong>Routing:</strong> Separate routers for <code>user</code>, <code>course</code>, and <code>admin</code> functionalities.</li>
  <li><strong>Database Models:</strong> Defined schemas for Users, Admins, Courses, and Purchases using Mongoose.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
  <li>Express.js</li>
  <li>Mongoose (MongoDB)</li>
  <li>JWT (JSON Web Tokens)</li>
  <li>Node.js</li>
  <li>dotenv for environment configuration</li>
</ul>

<h2>Endpoints</h2>
<p>Here are the main API routes included in this project:</p>

<ul>
  <li><code>POST /api/v1/user/signup</code> - Sign up a new user</li>
  <li><code>POST /api/v1/user/signin</code> - Sign in as a user</li>
  <li><code>GET /api/v1/user/purchases</code> - View purchased courses (protected route)</li>
  <li><code>POST /api/v1/admin/signup</code> - Sign up a new admin</li>
  <li><code>POST /api/v1/admin/signin</code> - Sign in as an admin</li>
  <li><code>POST /api/v1/admin/course</code> - Create a new course (protected route)</li>
  <li><code>GET /api/v1/course/preview</code> - Preview all courses</li>
</ul>

<h2>Learning Highlights</h2>
<p>This week, we focused on:</p>
<ul>
  <li>Setting up Express.js routers and middleware</li>
  <li>Using Mongoose for database management with MongoDB</li>
  <li>JWT-based authentication for secure API access</li>
  <li>Handling user roles (Admin and User) and access control</li>
  <li>Organizing code into modules for better maintainability</li>
</ul>

<h2>Setup</h2>
<ol>
  <li>Clone the repository</li>
  <li>Run <code>npm install</code> to install all dependencies</li>
  <li>Create a <code>.env</code> file and add the following variables:
    <ul>
      <li><code>MONGO_URL=your_mongo_connection_string</code></li>
      <li><code>JWT_USER_PASSWORD=your_jwt_secret_for_user</code></li>
      <li><code>JWT_ADMIN_PASSWORD=your_jwt_secret_for_admin</code></li>
    </ul>
  </li>
  <li>Run the server using <code>node app.js</code></li>
  <li>Server will be live on <code>http://localhost:3000</code></li>
</ol>
