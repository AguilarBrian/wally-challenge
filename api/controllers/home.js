export { home, wrongHome };

const home = (req, res) => {
    try {
        return res.send(`
            <h1>Welcome to the API.</h1>

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

            <h2>Products:</h2>
            
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

            <h2>Users:</h2>

            To search for users by username, email, first name or last name, use the following endpoint:<br/>
            <strong>/api/v1/users?search=YOUR_SEARCH_HERE</strong><br/>
            <br/>
            To see only active or inactive users, use the active query:<br/>
            <strong>/api/v1/users?active=ACTIVE_STATUS(BOOLEAN)</strong><br/>
            <br/>
            To filter by role, use the role query:<br/>
            <strong>/api/v1/users?role=ROLE</strong><br/>
        ` );
    } catch (err) { throw err }
}

const wrongHome = (req, res) => {
    try {
        return res.send(`
            <h1>Welcome to the API.</h1>

            You are in the wrong URL.<br/>
            Please make requests using "/api/v1/" in front of the URL.<br/>
            For example:<br/>
            /api/v1/users<br/>
            or<br/>
            /api/v1/user/60523289102a4b5308c80349<br/>
            <br/>
            If you need help or want to know the available endpoints, please go to the following endpoint:<br/>
            /api/v1/
        ` );
    } catch (err) { throw err }
}
