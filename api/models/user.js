import mongoose from 'mongoose';

export { UserModel };

const UserScheme = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    lastLogin: {
        type: Date
    },
    role: {
        type: String,
    },
    active: {
        type: Boolean,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    birthday: {
        type: Date
    },
});

const UserModel = mongoose.model('user', UserScheme);
