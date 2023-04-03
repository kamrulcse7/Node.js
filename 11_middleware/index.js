require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;


const myMiddleWareFunc = (req, res, next) => {
    console.log("Middleware function");
    next();
}

const getDateTime = (req, res, next) => {
    req.currentTime = Date(Date.now());
    console.log(`${req.currentTime}`);
    next();
}


//////
app.get('/',getDateTime, myMiddleWareFunc, (req, res) => {
    console.log("Home route");
})

app.get('/about', getDateTime, (req, res) => {
    console.log(`${req.currentTime}`);
});

app.get('/contact', (req, res)=>{
    console.log("Contact Page");
})


/// error handling useing MiddleWare
app.use((req, res, next)=>{
    res.send("404 bad url resquest");
});
app.use((err, req, res, next)=>{
    res.status(500).send("Something broke");
});

//all function use middleware function automiticaly
app.use(getDateTime);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});