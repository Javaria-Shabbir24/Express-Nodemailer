# Express and Nodemailer Project

## Overview
This project consists of two main tasks:
1. Implementing a modular routing system in an Express.js application for managing products.
2. Implementing a Node.js function using Nodemailer to send an email notification programmatically.

## Task 1: Modular Routing System in Express.js

### Description
Implement a modular routing system in an Express.js application to manage products. This includes creating a separate router module (`productsRouter.js`) to handle CRUD (Create, Read, Update, Delete) operations for products.

### Functionality
- `GET /products`: Retrieve a list of all products.
- `GET /products/:id`: Retrieve a specific product by ID.
- `POST /products`: Create a new product.
- `PUT /products/:id`: Update an existing product by ID.
- `DELETE /products/:id`: Delete a product by ID.

### Guidelines
1. **Create `productsRouter.js`:**
   - Use `express.Router()` to define these routes.
   - Implement appropriate request handlers (`getProducts`, `getProductById`, `createProduct`, `updateProduct`, `deleteProduct`).

2. **In-memory Storage:**
   - Use an array of objects to simulate database interactions for managing products.

3. **Integrate Router in `app.js`:**
   - Import and use `productsRouter` in `app.js`.
   - Mount the router under the `/products` path using `app.use('/products', productsRouter)`.

## Task 2: Email Notification using Nodemailer

### Description
Implement a Node.js function using Nodemailer to send an email notification programmatically. This example demonstrates sending a basic text-based email using a Gmail account.

### Guidelines
1. **Install Nodemailer:**
   - Install Nodemailer using npm: `npm install nodemailer`.

2. **Configure Nodemailer:**
   - Configure a Nodemailer transporter to use Gmail SMTP for sending emails.
   - Use environment variables to securely manage Gmail credentials.

3. **Implement `sendEmail` Function:**
   - The function takes parameters for the recipient's email address, subject, and message body.
   - Include error handling to log any errors during email sending.

