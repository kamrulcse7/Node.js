const express = require('express');
const app = express();
// const router = express.Router();
const userRouter = require("./routes/users.route");

// app.use(userRouter);
app.use("/api/users/", userRouter);

app.use("/api/users/informatino", (req, res) => {
    res.status(200).json(
        {
            status: "Success",
            name: "Kamrul Hasan",
            address: "Dhaka, Bangladesh",
            degree: [
                "SSC",
                "HSC",
                "BA",
                "Diploma in Computer",
                "B.Sc in CSE",
            ],
        }
    );
    res.end();
});

// auto redirect page
app.use("/login", (req, res) => {
    res.redirect("/");
    res.end();
})

//load html file
app.use("/signup", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/signup.html")
});

app.use("/start", (req, res) => {

    res.cookie("name", "Kamrul"); // set cookie
    res.cookie("age", "26");
    res.clearCookie("name"); // clear cookie

    res.append("id", "1564455");

    res.end();
});


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

app.use("/", (req, res) => {
    res.send("Welcome");
    res.end();
})

app.use((req, res) => {
    res.send("<h1>404 Not found</h1>");
});


module.exports = app;