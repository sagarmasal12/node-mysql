const express = require("express");

const morgan = require("morgan")
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");
const studentRoutes = require("./routes/studentsRoutes")
const color = require("colors")

//configuaration dotenv
dotenv.config()

//rest object
const app = express()

// middlewares 
// when clients  json data want to accept then use express.json otherwise we cant accept the json data
app.use(express.json());      
app.use(morgan("dev"));

 
//routes
app.use('/api/v1/student',studentRoutes)
app.get('/test',(req,res)=>{ 
    res.status(200).send('<h1>Nodejs Mysql App</h1>')
})

//port
const PORT = process.env.PORT || 8000;

// conditionally listen 
mySqlPool.query('SELECT 1').then(()=>{
    //mysql
    console.log('MYSQL DB Connected'.bgGreen.red)
//listen
    app.listen(PORT,()=>{
        console.log(`Server Running on port:- http://localhost:8080 ${PORT}`.bgYellow);

    })
}).catch((error)=>{
    console.log(error);
})




