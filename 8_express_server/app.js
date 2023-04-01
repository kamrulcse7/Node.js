const express = require('express');
const app = express();
// const router = express.Router();
const userRouter = require("./routes/users_route");

// app.use(userRouter);
app.use("/api/users/", userRouter);

// app.get("/", (req, res)=>{
//     res.send("Home Page");
// });

// app.get("/about", (req, res)=>{
//     res.send("About Page");
// })



/*
///////////http method//////////////////

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
*/

// app.get("/", (req, res)=>{
//     res.send("<h1> Home Route</h1>")
// } );
// app.get("/register", (req, res)=>{
//     res.send("<h1> Register</h1>")
// } );
// app.get("/login", (req, res)=>{
//     res.send("<h1>LogIn</h1>")
// } );

app.use("/", (req, res)=>{
    res.send("Welcome");
    res.end();
})

app.use((req, res)=>{
    res.send("<h1>404 Not found</h1>");
});


module.exports = app;