const express = require('express');
const app = express();

// app.get("/", (req, res)=>{
//     res.send("Home Page");
// });

// app.get("/about", (req, res)=>{
//     res.send("About Page");
// })

app.get("/", (req, res) => {
    res.send("Get Data");
    res.end(); // end response
});

app.post("/", (req, res) => {
    res.send("SignUp");
    res.end();
});

app.put("/", (req, res) => {
    res.send("Upadte Data");
    res.end();
});

app.delete("/", (req, res) => {
    res.send("Delete  Data");
    res.end();
});

module.exports = app;