import express from 'express';

const Router = express.Router();

import { getUsers, getUserById, wrongGetUser } from './controllers/user.js';
import { getProducts, getProductById, wrongGetProduct, postProduct, wrongPostProduct } from './controllers/product.js';
import { home, wrongHome } from './controllers/home.js';
import { auth, validateToken } from './controllers/auth.js'

const baseUrl = '/api/v1';

Router.use((req, res, next) => {
    console.log(`/${req.method} ${req.url} : ${res.statusCode}`);
    next();
});

// GET
// Root
Router.get('/', wrongHome);
Router.get(`${baseUrl}`, home);

// Users
Router.get(`${baseUrl}/users`, validateToken, getUsers);
Router.get(`${baseUrl}/user/:id`, validateToken, getUserById);
Router.get(`${baseUrl}/user`, wrongGetUser);

// Products
Router.get(`${baseUrl}/products`, validateToken, getProducts);
Router.get(`${baseUrl}/product/:id`, validateToken, getProductById);
Router.get(`${baseUrl}/product`, wrongGetProduct);

// POST
// Products
Router.post(`${baseUrl}/product`, validateToken, postProduct);
Router.post(`${baseUrl}/products`, wrongPostProduct);

// Login
Router.post(`${baseUrl}/auth`, auth);

export default Router;
