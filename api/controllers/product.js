import { ProductModel } from '../models/product.js';

export { getProducts, getProduct, wrongGetProduct, postProduct, wrongPostProduct };

const getProducts = (req, res) => {
    const { search } = req.query;
    try {
        if (search) {
            ProductModel.find({ $or: [{ SKU: { $regex: search, $options: 'i' } }, { name: { $regex: search, $options: 'i' } }] }, (err, data) => {
                try {
                    return res.status(200).json(data);
                } catch (err) { throw err }
            });
        } else {
            ProductModel.find({}, (err, data) => {
                try {
                    return res.status(200).json(data);
                } catch (err) { throw err }
            });
        }
    } catch (err) { throw err }
}

const getProduct = (req, res) => {
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
