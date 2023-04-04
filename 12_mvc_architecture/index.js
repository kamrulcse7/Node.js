require("dotenv").config();
const express = require('express');
const userRoute = require("./routes/users_routes");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(userRoute)







app.use((req, res)=>{
    res.status(404).json({
        status : "Failed",
    });
});

app.listen(PORT, ()=>{
    console.log(`Server is running http://localhost:${PORT}`);
});