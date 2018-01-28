// read database
var fs = require('fs');
var data  = fs.readFileSync('posts.json');
var posts = JSON.parse(data);


// config server
var express = require('express');
var app = express();
var port = 80;
var server = app.listen(port, listening(port));
function listening(){
    console.log("Server start at " + port)
}


// construct api 
app.get("/addPost");
function addPost(){

}

app.get("/searchPost/:title");
function searchPost(request, response){

}

app.get("/getPost",getPost);
function getPost(request, response){
    response.send(posts)
}