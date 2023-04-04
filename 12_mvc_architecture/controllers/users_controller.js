const path = require("path");
const users = require('../models/user_model');

exports.getUser = (req, res) => {
    res.sendFile(path.join(__dirname+"/../views/index.html"))
}

exports.saveUser = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const addUser = {
        name,
        age
    };
    users.push(addUser);

    res.status(200).json({
        status: 'Success',
        users,
    });
}