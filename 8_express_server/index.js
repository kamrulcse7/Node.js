// npm init -y
//npm install express nodemon


// const express = require('express');
// const app = express();
const app = require('./app')
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
});