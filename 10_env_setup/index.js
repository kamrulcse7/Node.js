// npm init -y
// npm install dotenv

require("dotenv").config();
const express = require("express");
const app = express();
PORT = process.env.PORT || 3001;

app.get("/", (req, res)=>{
    res.send("Home Route")
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});