import { UserModel } from "../models/user.js";

export { getUsers, getUserById, wrongGetUser, updateUserLastLogin };

const getUsers = (req, res) => {
    const { search, active, role, limit, skip, orderBy, sort } = req.query;
    try {
        let query = [];
        let match = {};

        if (search) {
            match.$or = [
                { username: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { firstName: { $regex: search, $options: 'i' } },
                { lastName: { $regex: search, $options: 'i' } }
            ]
        }

        // ! In the given DB, the field 'active' is a string, not a boolean. This happens in the only 'false' case.
        // ! To match the 'false' string case, we need to use the $ne operator.
        if (active) match.active = active == 'true' ? true : { $ne: true };

        if (role) match.role = role;

        query.push({ $match: match });

        if (skip) query.push({ $skip: parseInt(skip) });
        if (limit) query.push({ $limit: parseInt(limit) });
        if (orderBy || sort) query.push({ $sort: { [orderBy ? orderBy : '_id']: sort == 'desc' ? -1 : 1 } });

        UserModel.aggregate(query, (err, data) => {
            if (err) return res.status(400).json({ message: 'Error getting users' });
            return res.status(200).json(data);
        });

    } catch (err) { throw err }
}

const getUserById = (req, res) => {
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

const updateUserLastLogin = (id) => {
    try {
        UserModel.findByIdAndUpdate(id, { lastLogin: new Date() }, (err, data) => {
            if (err) return console.log('Error updating last login');
            return
        });
    } catch (err) { throw err }
}
