import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export { connection };

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;
const DB = process.env.DB_NAME;
const AUTH = process.env.DB_AUTH_SOURCE;

const DB_URI = `mongodb://${USER}:${PASS}@${HOST}/${DB}?tls=false&authMechanism=DEFAULT&authSource=${AUTH}`;

const DB_CONFIG = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const ERR_HANDLER = (err) => {
    if (err) console.log(err);
    else console.log("Connected to database");
}

const connection = () => { mongoose.connect(DB_URI, DB_CONFIG, ERR_HANDLER); }
