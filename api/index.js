import express from 'express';

const Router = express.Router();

import { getUsers, getUser, wrongGetUser } from './controllers/user.js';
import { getProducts, getProduct, wrongGetProduct, postProduct, wrongPostProduct } from './controllers/product.js';
import { home, wrongHome } from './controllers/home.js';

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
Router.get(`${baseUrl}/users`, getUsers);
Router.get(`${baseUrl}/user/:id`, getUser);
Router.get(`${baseUrl}/user`, wrongGetUser);

// Products
Router.get(`${baseUrl}/products`, getProducts);
Router.get(`${baseUrl}/product/:id`, getProduct);
Router.get(`${baseUrl}/product`, wrongGetProduct);

// POST
Router.post(`${baseUrl}/product`, postProduct);
Router.post(`${baseUrl}/products`, wrongPostProduct);

export default Router;
