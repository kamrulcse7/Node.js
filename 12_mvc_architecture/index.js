require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));

const users = [
    {
        name:"kameul",
        age:26,
    },
    {
        name:"Mahmud",
        age:22,
    },
    {
        name:"Hasan",
        age:21,
    },
];

const htmlForm = `
    <form method= "POST" action="/user">
        <input type="text" name="name" placeholder="Enter Name"/>
        <input type="number" name="age" placeholder="Enter Age"/>
        <button type="submit">Save user</button>
    </form>
`

app.get('/user', (req, res)=>{
    res.send(htmlForm);
});

app.post('/user', (req, res)=>{
   const name = req.body.name;
   const age = Number(req.body.age);
   const addUser = {
    name,
    age
   };
   users.push(addUser);

   res.status(200).json({
    status : 'Success',
    users,
   });
});

app.use((req, res)=>{
    res.status(404).json({
        status : "Failed",
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running http://localhost:${PORT}`);
});