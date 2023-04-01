

const express = require("express");
const router = express.Router();

//http://localhost:3000/api/users/
router.get("/", (req, res) => {
    res.send("<h1> Home Route</h1>")
});

//http://localhost:3000/api/users/register
router.get("/register", (req, res) => {
    res.send("<h1> Register</h1>")
});

//http://localhost:3000/api/users/login
router.get("/login", (req, res) => {
    res.send("<h1>LogIn</h1>")
});

module.exports = router;