const express = require("express");
const  app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//Routing
app.get("/", function(req,res){
	res.render("index.html");
});

app.get("/desktop-suport", function(req,res){
	res.render("desktop-suport.html");
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