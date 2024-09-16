<h1 align="center">Week 7 Day 01 - MongoDB Introduction</h1>

<h2>Overview</h2>
<p>This repository contains the code and assignments for <strong>Week 7, Day 01</strong>, covering the basics of <strong>MongoDB</strong> integration with <strong>Node.js</strong> using <strong>Mongoose</strong>. This marks the start of our journey with MongoDB, where we explore how to set up schemas, models, and authentication in a web application.</p>

<p>The code is divided into two main folders:</p>

<ul>
  <li><strong>Lecture_Code</strong>: This folder contains the code taught during the lecture.</li>
  <li><strong>Assignments</strong>: This folder contains the assignment tasks you need to complete, building on the concepts covered in the lecture.</li>
</ul>

<hr/>

<h2>Folder Structure</h2>

<h3>1. Lecture_Code</h3>

<p>This folder contains the core implementation of MongoDB and Mongoose to manage <strong>Users</strong> and <strong>Todos</strong>. The focus is on learning how to:</p>

<ul>
  <li>Create <strong>User</strong> and <strong>Todo</strong> schemas.</li>
  <li>Implement <strong>JWT-based authentication</strong> to secure routes.</li>
  <li>Handle user sign-up and sign-in operations.</li>
  <li>Allow authenticated users to create and retrieve todos.</li>
</ul>

<h4>Files:</h4>

<ul>
  <li><strong>db.js</strong>: 
    <ul>
      <li>Contains the Mongoose schema definitions for <code>User</code> and <code>Todo</code>.</li>
      <li>Defines models that will be used to interact with the MongoDB database.</li>
    </ul>
  </li>
  <li><strong>index.js</strong>: 
    <ul>
      <li>A Node.js server using <strong>Express</strong>.</li>
      <li>Implements routes for:
        <ul>
          <li><strong>Sign up</strong> and <strong>Sign in</strong> with JWT-based token generation.</li>
          <li><strong>Todo creation</strong> for authenticated users.</li>
          <li>Retrieving all todos for the logged-in user.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<hr/>

<h3>2. Assignments</h3>

<p>The assignment folder focuses on reinforcing the concepts learned in the lecture through practical tasks. It also introduces a more refined <strong>authentication</strong> process with middleware.</p>

<h4>Files:</h4>

<ul>
  <li><strong>auth.js</strong>: 
    <ul>
      <li>Middleware for handling JWT verification and ensuring only authenticated users can access protected routes.</li>
    </ul>
  </li>
  <li><strong>db.js</strong>: 
    <ul>
      <li>Similar to the lecture code but with slight modifications to store <code>userEmail</code> in the <code>Todo</code> schema instead of <code>userId</code>.</li>
    </ul>
  </li>
  <li><strong>index.js</strong>: 
    <ul>
      <li>Implements additional logic to:
        <ul>
          <li>Prevent duplicate todos for the same user.</li>
          <li>Add proper error handling and status codes for user actions.</li>
          <li>Handle <strong>JWT-based authentication</strong> using the custom <code>auth</code> middleware.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<hr/>

<h2>Topics Covered:</h2>

<ul>
  <li>Setting up <strong>MongoDB Atlas</strong> with <strong>Mongoose</strong> for database management.</li>
  <li>Defining and using <strong>Mongoose Schemas</strong> and <strong>Models</strong>.</li>
  <li>Implementing <strong>User Authentication</strong> with <strong>JWT</strong> (JSON Web Tokens).</li>
  <li>Securing routes with <strong>JWT-based middleware</strong>.</li>
  <li>CRUD operations for <strong>Todo management</strong> linked to specific users.</li>
  <li>Error handling for duplicate entries and invalid credentials.</li>
</ul>

<hr/>

<h3 align="center">Happy Coding!</h3>
