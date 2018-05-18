var fs = require('fs');
var express = require('express');
var app = express();
app.listen(8080,function(){

console.log("server is up and running at port 8080");
})

app.get('/', function(request,response){
CONTENT = "TEST";
MSG = process.env.APP_MSG;
data = fs.readFileSync('/opt/app-root/secure/myapp.sec', 'utf8');
var lines = data.split('\n');
lineusername = lines[0].split('=');
linepassword = lines[1].split('=');
linesalt = lines[2].split('=');
response.send("configmap" + "\n=========\n" + "ENV VAR APP_MSG = " + MSG + "\n" + "secret\n======\n" + "username = " + lineusername[1] + "\npassword = " + linepassword[1] + "\nsalt = " + linesalt[1] + "\n");
})
