// npm init -y
// npm install express nodemon

const express = require('express');
const app = express();
const PORT = 3001;

// http://localhost:3001
app.get("/", (req, res) => {
    res.send("Home Page");
})

// query parameter
// http://localhost:3001/student?id=102&&name=kamrul&&age=26
app.get("/student", (req, res) => {
    // const id = req.query.id;
    // const name = req.query.name;
    // const age = req.query.age;
    //or
    const { id, name, age } = req.query;
    res.send(`Id: ${id}, Name: ${name}, Age: ${age}`)
});

//routes parameter
// http://localhost:3001/id/37/name/kamrul
app.get("/id/:id/name/:name", (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.send(`Id: ${id}, name: ${name}`)
})


// get data from header 

app.get("/get_data_from_header", (req, res) => {
    const id = req.header('id');
    const name = req.header('name');
    res.send(`id: ${id}, name: ${name}`)
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})