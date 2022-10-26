# wally-challenge

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Challenge Churrasco / Wally - CRUD de Productos</h3>

  <p align="center">
    Churrasco CRUD Challenge for Wally
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
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The objective of this coding challenge will be to evaluate the applicant's knowledge / programming skills in the NodeJs language.
The delivered solution must be composed of a project ready to run locally:
Backend project, developed with Nodejs/express technologies (required) that will expose a Rest API of services and will be in charge of accessing the Database (BD provided by Churrasco).
The DB can be explored using MongoDb Compass with the access data given in the appendix.

The API design will be free. They can use Node/Express compatible technologies/frameworks: eg. Typescript, NestJs, etc.

#### Functionality 1: Login 30% of the challenge

It should develop:
- User authentication backend, using the users collection entries as valid users.
- You should only be able to log in users with role=”admin” and property 'active'=true
- The password is stored in the database as a SHA256 hash
- The user can enter either with a username or with an email.
- If the user is valid, the login endpoint must return a JWT token that will be sent in each subsequent request in the 'Authorization' header.
- The rest of the endpoints will have to validate that this token is valid.

#### Functionality 2: List of Products. 40% of the challenge
- It must be developed.
- Backend for obtaining products, using the entries of the products collection.
- Extra credit for implementing search filters.

#### Functionality 3: Product registration. 30% of the challenge
It should develop:
- Backend for the insertion of a new product, validating that the required fields (SKU, name, images, price, currency) are present but that the optional fields (code, description) are allowed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.com]][Node-url]
* [![Express][Express.com]][Express-url]
* [![MongoDB][MongoDB.com]][MongoDB-url]
* [![Mongoose][Mongoose.com]][Mongoose-url]
* [![JWToken][JWToken.com]][JWToken-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

First of all, you need to have installed Node.js and Node Package Manager (npm) in your computer.

### Prerequisites

* node.js<br/>
  https://nodejs.org/es/

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/AguilarBrian/wally-challenge.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Set the environment variables in a `.env` file
   ```sh
    STATUS=development
    PORT=4000
    DEV_PORT=3000
    JWT_SECRET = 5e88ce357912541882d7435ec5520c1547ccba045950782133173dc4017c40e3
    DB_NAME= INSERT_DATABASE_NAME
    DB_HOST= INSERT_DATABASE_HOST
    DB_USER= INSERT_DATABASE_USER
    DB_PASS= INSERT_DATABASE_PASSWORD
    DB_AUTH_SOURCE= INSERT_DATABASE_AUTH_SOURCE
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To run the project, you need to run the following command in the root folder of the project:

```sh
npm run dev
```

You can use any client to test the API, such as Postman or Insomnia (or a browser only for GET requests).

First you need to login to get a token.<br/>
You can do it by making a POST request to the following endpoint:<br/>
<strong>/api/v1/auth</strong><br/>
<br/>
With the following body:<br/>
<strong>
{<br/>
    username: string (OR EMAIL),<br/>
    email: string (OR USERNAME),<br/>
    password: string<br/>
}
</strong><br/>
<br/>
You must add the given token in the headers or the query of the request to make requests to the other endpoints.<br/>
<strong>Headers: Authorization: Bearer token</strong><br/>
<strong>Query: accessToken=token</strong><br/>
<br/>
You can use <strong>GET requests</strong> on the following endpoints:<br/>
<ul>
    <li><strong>/api/v1/users</strong>  -  Get all users<br/></li>
    <li><strong>/api/v1/user/:id</strong>  -  Get one user by its ID<br/></li>
    <li><strong>/api/v1/products</strong>  -  Get all products<br/></li>
    <li><strong>/api/v1/product/:id</strong>  -  Get one product by its ID</li>
</ul>
<br/>
You can use <strong>POST requests</strong> on the following endpoint:<br/>
<ul>
    <li><strong>/api/v1/product</strong>  -  Create a new product<br/></li>
</ul>
<br/>


<h3>Products:</h3>

To search for products by SKU, name or description, use the following endpoint:<br/>
<strong>/api/v1/products?search=YOUR_SEARCH_HERE</strong><br/>
<br/>
To set a price range, you can use priceBot (bottom) and priceTop range: (you can use only one, or both)<br/>
<strong>/api/v1/products?priceBot=YOUR_PRICE_HERE&priceTop=YOUR_PRICE_HERE</strong><br/>
<br/>
To filter by currency type, use the currency query:<br/>
<strong>/api/v1/products?currency=YOUR_CURRENCY_HERE</strong><br/>
<br/>
To add a product, use <strong>POST request</strong> on the following endpoint:<br/>
<strong>/api/v1/product</strong><br/>
<br/>
You have to respect the following format:<br/>
<strong>
{<br/>
    SKU: String,<br/>
    code: Number (OPTIONAL),<br/>
    name: String,<br/>
    description: String (OPTIONAL),<br/>
    pictures: Array<string>,<br/>
    price: Number,<br/>
    currency: String<br/>
}
</strong><br/>
<br/>

<h3>Users:</h3>

To search for users by username, email, first name or last name, use the following endpoint:<br/>
<strong>/api/v1/users?search=YOUR_SEARCH_HERE</strong><br/>
<br/>
To see only active or inactive users, use the active query:<br/>
<strong>/api/v1/users?active=ACTIVE_STATUS(BOOLEAN)</strong><br/>
<br/>
To filter by role, use the role query:<br/>
<strong>/api/v1/users?role=ROLE</strong><br/>

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