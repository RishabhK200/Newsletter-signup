const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));                                       // to run static files such as css and images
app.use(bodyParser.urlencoded({extended:true}));                         // to use body-Parser

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    
    var firstName = req.body.fname ;
    var lastName = req.body.lname ;
    var email = req.body.email ;

    console.log(firstName,lastName,email);

})

app.listen(3000, function(){
    console.log("server is running on port 3000");
});

// API key 
//6e208fcd691b017a74ae6e2c10ae8c13-us8