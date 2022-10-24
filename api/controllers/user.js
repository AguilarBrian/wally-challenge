import { UserModel } from "../models/user.js";

export { getUsers, getUser, wrongGetUser };

const getUsers = (req, res) => {
    const { search } = req.query;
    try {
        if (search) {
            UserModel.find({ $or: [{ firstName: { $regex: search, $options: 'i' } }, { lastName: { $regex: search, $options: 'i' } }] }, (err, data) => {
                try {
                    return res.status(200).json(data);
                } catch (err) { throw err }
            });
        } else {
            UserModel.find({}, (err, data) => {
                try {
                    return res.status(200).json(data);
                } catch (err) { throw err }
            });
        }
    } catch (err) { throw err }
}

const getUser = (req, res) => {
    try {
        const { id } = req.params;
        UserModel.findById(id, (err, data) => {
            try {
                return res.status(200).json(data);
            } catch (err) { throw err }
        });
    } catch (err) { throw err }
}

const wrongGetUser = (req, res) => {
    try {
        return res.send(`
                <h1>Wrong URL.</h1>
                <h2>Please, add an user ID at the end of the URL.</h2>
                <h2>E.g You can try: /user/60523289102a4b5308c80349</h2>
            `);
    } catch (err) { throw err }
}
