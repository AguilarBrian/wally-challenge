export { home, wrongHome };

const home = (req, res) => {
    try {
        return res.send(`
            <h1>Welcome to the API.</h1>

            You can use <strong>GET requests</strong> on the following endpoints:<br/>
            <strong>/api/v1/users</strong>  -  Get all users<br/>
            <strong>/api/v1/user/:id</strong>  -  Get one user by its ID<br/>
            <strong>/api/v1/products</strong>  -  Get all products<br/>
            <strong>/api/v1/product/:id</strong>  -  Get one product by its ID<br/>
            <br/>
            
            You can also search for products by SKU or name using the following endpoint:<br/>
            <strong>/api/v1/products?search=YOUR_SEARCH_HERE</strong><br/>
            <br/>

            Or search for users by first or last name using the following endpoint:<br/>
            <strong>/api/v1/users?search=YOUR_SEARCH_HERE</strong><br/>
            <br/>

            To add a product, use <strong>POST request</strong> on the following endpoint:<br/>
            <strong>/api/v1/product</strong><br/>
            <br/>
            To make the POST request, you have to respect the following format:<br/>
            <strong>
            {<br/>
                _id: ObjectId,<br/>
                SKU: string,<br/>
                code: number (OPTIONAL),<br/>
                name: string,<br/>
                description: string (OPTIONAL),<br/>
                pictures: Array<string>,<br/>
                price: number,<br/>
                currency: string<br/>
              }
            </strong><br/>
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
            If you want to know the available endpoints, please go to the following endpoint:<br/>
            /api/v1/
        ` );
    } catch (err) { throw err }
}
