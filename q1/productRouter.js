const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// In-memory storage for products
let products = [];

// Route Handlers
const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
};

const createProduct = (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  sendEmailNotification('Product Created', `A new product has been created: ${JSON.stringify(newProduct)}`);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { id, ...req.body };
    sendEmailNotification('Product Updated', `Product with ID ${id} has been updated: ${JSON.stringify(products[index])}`);
    res.json(products[index]);
  } else {
    res.status(404).send('Product not found');
  }
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
    sendEmailNotification('Product Deleted', `Product with ID ${id} has been deleted: ${JSON.stringify(deletedProduct)}`);
    res.status(204).send();
  } else {
    res.status(404).send('Product not found');
  }
};

// Email Notification Function
const sendEmailNotification = (subject, text) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'javariashabbir2431@gmail.com', 
      pass: 'zgml ixhi pdgf abcd'   
    }
  });

  let mailOptions = {
    from: 'javariashabbir2431@gmail.com',  
    to: 'l216053@lhr.nu.edu.pk', 
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });
};

// Define Routes
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
