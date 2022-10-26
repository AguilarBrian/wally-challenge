import { UserModel } from "../models/user.js";
import { updateUserLastLogin } from "../controllers/user.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import sha256 from 'crypto-js/sha256.js';
dotenv.config();

export { auth, validateToken };

const generateAccessToken = async (user) => {
    const payload = {
        userId: user.id,
    };
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

// middleware to validate tokens on the other endpoints
const validateToken = async (req, res, next) => {
    const token = req.headers['authorization'] || req.query.accessToken;
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

const auth = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const encryptedPassword = sha256(password).toString();
        let user = {};

        if ((!username && !email) || !password) return res.status(400).json({ message: 'Please enter all fields' });

        if (username) {
            user = await UserModel.findOne({ username });
        } else if (email) {
            user = await UserModel.findOne({ email });
        }
        if (!user) return res.status(400).json({ message: 'User does not exist' });

        if (user.role !== 'admin' || user.active !== true) return res.status(400).json({ message: 'User is not an admin or is not active' });

        if (encryptedPassword !== user.password) return res.status(400).json({ message: 'Invalid credentials' });

        const accessToken = await generateAccessToken(user);

        // update last login in db
        updateUserLastLogin(user.id);

        return res.header('Authorization', accessToken).json({ accessToken });
    } catch (err) { throw err }
}
