<h1 style="text-align: center;">Week 5 Day 2 - Middlewares and CORS</h1>
<p>This document covers the implementation and usage of middlewares in Express.js, including custom middlewares for logging and validation, and the configuration of CORS (Cross-Origin Resource Sharing) to handle cross-origin requests.</p>

<h2>Examples Covered</h2>
<ul>
    <li><strong>Middleware Introduction:</strong> Introduces middleware functions in Express.js, including how they are used to process requests and responses.</li>
    <li><strong>Request Logging Middleware:</strong> Demonstrates creating a middleware function to log details such as HTTP method, URL, and timestamp for each incoming request.</li>
    <li><strong>Input Validation Middleware:</strong> Shows how to create middleware that validates input data for specific routes to ensure proper request handling.</li>
    <li><strong>Using express.json():</strong> Explains how to use <code>express.json()</code> to parse JSON bodies in requests for better data handling.</li>
    <li><strong>Handling CORS:</strong> Provides an example of how to handle CORS in Express.js to enable cross-origin requests, improving API accessibility across different domains.</li>
</ul>

<h2>Key Concepts</h2>
<ul>
    <li><strong>Middleware Functions:</strong> Learn about middleware in Express.js, its role in processing HTTP requests, and how to use it for tasks like logging and validation.</li>
    <li><strong>Logging Requests:</strong> Implement middleware to log HTTP method, URL, and timestamp for every request, aiding in monitoring and debugging.</li>
    <li><strong>Input Validation:</strong> Understand how to validate request data using middleware to prevent invalid or malicious data from being processed.</li>
    <li><strong>express.json():</strong> Use <code>express.json()</code> to automatically parse JSON request bodies, simplifying data extraction and handling.</li>
    <li><strong>CORS Configuration:</strong> Explore how to configure CORS in an Express application to manage cross-origin requests and enhance API security and accessibility.</li>
</ul>

<h2>Assignments Done</h2>
<ul>
    <li><strong>Request Logging Middleware:</strong> Created middleware to log HTTP method, URL, and timestamp for incoming requests to the console.</li>
    <li><strong>Simple Calculator Application:</strong> Built an application using Express.js and middleware to validate inputs and perform arithmetic operations. Included error handling for invalid inputs and operators.</li>
    <li><strong>CORS Handling:</strong> Configured CORS to allow cross-origin requests, facilitating interactions between the client and server hosted on different domains.</li>
</ul>

<h2>How to Explore</h2>
<p>To explore the concepts covered:</p>
<ul>
    <li><strong>Clone the Repository:</strong> Use Git to clone the project repository to your local machine.</li>
    <li><strong>Review Middleware Code:</strong> Examine the JavaScript files to understand how middlewares are implemented and utilized in Express.js.</li>
    <li><strong>Run the Application:</strong> Start the Express server and test the request logging and calculator functionalities to see how they work in action.</li>
    <li><strong>Experiment with CORS:</strong> Modify CORS settings and test cross-origin requests to understand how they affect API accessibility.</li>
    <li><strong>Enhance the Application:</strong> Add additional features or modify existing ones to deepen your understanding of middleware, validation, and CORS.</li>
</ul>

<h2>Author</h2>
<p>&copy; Muhammad Zafar Ul Haq</p>
