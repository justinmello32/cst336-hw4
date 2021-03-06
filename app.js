const express = require("express");
const  app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//Add Faker
const faker =require('faker');
let fakerData = faker.internet.email();

//Routing
app.get("/", function(req,res){
	res.render("index.html", {"fakerData":fakerData});
});

app.get("/desktop-support", function(req,res){
	res.render("desktop-support.html");
});

app.get("/sys-admin", function(req,res){
	res.render("sys-admin.html");
});

app.get("/network-admin", function(req,res){
	res.render("network-admin.html");
});


//Starting  Server
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is running");
});