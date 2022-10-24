import mongoose from 'mongoose';

export { ProductModel };

const ProductScheme = new mongoose.Schema({
    SKU: {
        type: String,
        required: true
    },
    code: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    pictures: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model('product', ProductScheme);
