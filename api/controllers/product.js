import { ProductModel } from '../models/product.js';

export { getProducts, getProductById, wrongGetProduct, postProduct, wrongPostProduct };

const getProducts = (req, res) => {
    const { search, priceBot, priceTop, currency } = req.query;
    try {
        let query = {};

        if (search) {
            query = {
                $or: [
                    { SKU: { $regex: search, $options: 'i' } },
                    { name: { $regex: search, $options: 'i' } },
                    { description: { $regex: search, $options: 'i' } }
                ]
            }
        }
        if (priceBot || priceTop) query.price = {};
        if (priceBot) query.price.$gte = priceBot;
        if (priceTop) query.price.$lte = priceTop;
        if (currency) query.currency = currency;

        ProductModel.find(query, (err, data) => {
            if (err) return res.status(400).json({ message: 'Error getting products' });
            return res.status(200).json(data);
        });

    } catch (err) { throw err }
}

const getProductById = (req, res) => {
    try {
        const { id } = req.params;
        ProductModel.findById(id, (err, data) => {
            try {
                return res.status(200).json(data);
            } catch (err) { throw err }
        });
    } catch (err) { throw err }
}

const wrongGetProduct = (req, res) => {
    try {
        return res.send(`
                <h1>Wrong URL.</h1>
                <h2>Please, add a product ID at the end of the URL.</h2>
                <h2>E.g You can try: /product/6192cc1cdbccfce8f63350b8</h2>
            `);
    } catch (err) { throw err }
}

const postProduct = (req, res) => {
    try {
        const { SKU, code, name, description, pictures, price, currency } = req.body;

        // It's already checked in the model, but I add the validation to show the error message for better visualization.
        if (!SKU || !name || !pictures || !price || !currency) {
            return res.status(400).json({ message: 'Please, fill all the required fields.' });
        }

        const product = new ProductModel({ SKU, code, name, description, pictures, price, currency });
        product.save((err, data) => {
            try {
                return res.status(201).json(data);
            } catch (err) { throw err }
        });
    } catch (err) { throw err }
}

const wrongPostProduct = (req, res) => {
    try {
        return res.status(400).json({ message: 'Wrong URL. You tried a POST request on /products. Please, try again with /product' });
    } catch (err) { throw err }
}
