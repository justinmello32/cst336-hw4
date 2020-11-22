const express = require("express");
const  app = express();


//Routing
app.get("/", function(req,res){
	res.render("index.html");
});


//Starting  Server
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express server is running");
});