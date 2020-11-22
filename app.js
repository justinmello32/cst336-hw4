const express = require("express");
const  app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//Routing
app.get("/", function(req,res){
	res.render("index.html", {"pageTitle"},"Getting Started in IT");
});

app.get("/desktop-suport", function(req,res){
	res.render("desktop-support.html", {"pageTitle"}, "Desktop Support");
});

app.get("/sys-admin", function(req,res){
	res.render("sys-admin.html", {"pageTitle"}, "System Administrator");
});

app.get("/network-admin", function(req,res){
	res.render("network-admin.html", {"pageTitle"}, "Network Administrator");
});


//Starting  Server
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is running");
});