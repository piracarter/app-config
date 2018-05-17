var express = require('express');
var app = express();

app.listen(8080,function(){

console.log("server is up and running at port 8080");
})

app.get('/', function(request,response){
response.send("Hello World");
responde.send(process.env.APP_MSG);
})
