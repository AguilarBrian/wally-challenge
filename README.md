<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">

  <h1 align="center">Challenge Churrasco / Wally - CRUD</h1>

  <p align="center">
    Node and Express API REST with products CRUD and users authentication using JWT.
    <br />
    <a href="https://github.com/AguilarBrian/wally-challenge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AguilarBrian/wally-challenge/issues">Report Bug</a>
    ·
    <a href="https://github.com/AguilarBrian/wally-challenge/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#routes">Routes</a></li>
        <li><a href="#product-routes">Product Routes</a></li>
        <li><a href="#user-routes">User Routes</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Project ready to run locally:<br/>
Backend project, developed with Nodejs/Express technologies that exposes a Rest API of services and is responsible for accessing the Database (DB provided by Churrasco).<br/>

#### Functionality 1: Login. (30% of the challenge) (Done)

- [x] User authentication backend, using the users collection entries as valid users.
- [x] You should only be able to log in users with role=”admin” and property active=true
- [x] The password is stored in the database as a SHA256 hash
- [x] The user can enter either with a username or with an email.
- [x] If the user is valid, the login endpoint must return a JWT token that will be sent in each subsequent request in the 'Authorization' header.
- [x] The rest of the endpoints will have to validate that this token is valid.

#### Functionality 2: List of Products. (40% of the challenge) (Done)
- [x] Backend for obtaining products, using the entries of the products collection.
- [x] Extra credit for implementing search filters.

#### Functionality 3: Product registration. (30% of the challenge) (Done)
- [x] Backend for the insertion of a new product, validating that the required fields (SKU, name, images, price, currency) are present but that the optional fields (code, description) are allowed.



### Built With

* [![Node][Node.com]][Node-url]
* [![Express][Express.com]][Express-url]
* [![MongoDB][MongoDB.com]][MongoDB-url]
* [![Mongoose][Mongoose.com]][Mongoose-url]
* [![JWToken][JWToken.com]][JWToken-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First of all, you need to have installed Git, Node.js and Node Package Manager (NPM) in your computer.

### Prerequisites

* git<br/>
  https://git-scm.com/downloads

* node.js<br/>
  https://nodejs.org/es/

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AguilarBrian/wally-challenge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set the environment variables in a `.env` file
   ```sh
    STATUS = development
    PORT = 4000
    DEV_PORT = 3000
    JWT_SECRET = INSERT_YOUR_SECRET
    DB_NAME = INSERT_DATABASE_NAME
    DB_HOST = INSERT_DATABASE_HOST
    DB_USER = INSERT_DATABASE_USER
    DB_PASS = INSERT_DATABASE_PASSWORD
    DB_AUTH_SOURCE = INSERT_DATABASE_AUTH_SOURCE
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. <strong>Run the project:</strong> You need to run the following command in the root folder of the project:
  ```sh
  npm run dev
  ```
<br/>

_You can use any client to test the API, such as [Postman](https://www.postman.com/downloads/), [Insomnia](https://insomnia.rest/download) or VSCode's [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension (or a [browser](https://www.google.com/chrome/) for GET requests)._

<br/>

2. <strong>Login to get a token:</strong>
  You can do it by making a <strong>POST request</strong> to the following endpoint:<br/>
  `/api/v1/auth`<br/>
  <br/>
  With the following body format:
  ```json
  {
      "username": "String", //(or email)
      "email": "String", //(or username)
      "password": "String"
  }
  ```

3. <strong>Add the given token</strong> in the Headers or the query of the request to make requests to the other endpoints.
  ```sh
  Headers --> Authorization: Bearer token
  Query --> accessToken=token
  ```


### Routes

You can make <strong>GET requests</strong> to the following endpoints:<br/>
```
/api/v1/users        -  Get all users
/api/v1/user/:id     -  Get a user by their ID
/api/v1/products     -  Get all products
/api/v1/product/:id  -  Get a product by its ID
```
<br/>

You can make <strong>POST requests</strong> to the following endpoint:<br/>
```
/api/v1/product  -  Create a new product
```
<br/>

### Product Routes

_To concatenate query parameters, use the format: `?firstProperty=value&followingProperties=value`_<br/>
<br/>

- GET - Search by SKU, name or description:<br/>
  `/api/v1/products?search=YOUR_SEARCH_HERE`

- GET - Set a price range: (priceBot sets bottom and priceTop sets top. You can use one or both)<br/>
  `/api/v1/products?priceBot=YOUR_PRICE_HERE&priceTop=YOUR_PRICE_HERE`

- GET - Filter by currency:<br/>
  `/api/v1/products?currency=YOUR_CURRENCY_HERE`

- POST - Add a product:<br/>
  `/api/v1/product`

  With the following body format:
  ```json
  {
      "SKU": "String",
      "code": Number, //(optional)
      "name": "String",
      "description": "String", //(optional)
      "pictures": ["String"], //array of URLs
      "price": Number,
      "currency": "String"
  }
  ```
<br/>

### User Routes

_To concatenate query parameters, use the format: `?firstProperty=value&followingProperties=value`_<br/>
<br/>

- GET - Search by username, email, first name or last name:<br/>
  `/api/v1/users?search=YOUR_SEARCH_HERE`

- GET - See only active or inactive users:<br/>
  `/api/v1/users?active=ACTIVE_STATUS`

- GET - Filter by role:<br/>
  `/api/v1/users?role=ROLE`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Brian Aguilar - [@braiaguilar](https://twitter.com/braiaguilar) - brianisaiasaguilar@gmail.com

Project Link: [https://github.com/AguilarBrian/wally-challenge](https://github.com/AguilarBrian/wally-challenge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/AguilarBrian/wally-challenge.svg?style=for-the-badge
[contributors-url]: https://github.com/AguilarBrian/wally-challenge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AguilarBrian/wally-challenge.svg?style=for-the-badge
[forks-url]: https://github.com/AguilarBrian/wally-challenge/network/members
[stars-shield]: https://img.shields.io/github/stars/AguilarBrian/wally-challenge.svg?style=for-the-badge
[stars-url]: https://github.com/AguilarBrian/wally-challenge/stargazers
[issues-shield]: https://img.shields.io/github/issues/AguilarBrian/wally-challenge.svg?style=for-the-badge
[issues-url]: https://github.com/AguilarBrian/wally-challenge/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/braiaguilar
[Node.com]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.com]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[MongoDB.com]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Mongoose.com]: https://img.shields.io/badge/Mongoose-47A248?style=for-the-badge&logo=mongoose&logoColor=white
[Mongoose-url]: https://mongoosejs.com/
[JWToken.com]: https://img.shields.io/badge/JSON%20Web%20Token-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white
[JWToken-url]: https://jwt.io/