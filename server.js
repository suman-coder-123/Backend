// 1. to install express => npm install express => in terminal 

const express = require("express");

const app = express();

app.get("/" , (req , res) => {
    res.send("welcome to server ");
});


// to define a port number => listen function 


app.listen(5000 , () => {
    console.log("server running on 5000");
})

// 2.  phele server chalAne ke liye => node server.js

//  3.  on browser => localhost:5000

// 4.  to auto save the server => npm install -g nodemon  => in terminal 

// go to package .json  => script =>  "start" : "nodemon server.js"


/// finall => server chalane le liye => npm start 

