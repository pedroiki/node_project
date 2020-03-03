//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Server Beta 1.0 by Carlos Gomes!</h1>");
});

app.get("/contact", function(req, res){
    res.send("contact me at: pedroiki@gmail.com");

  });


  app.get("/About", function(req, res){
    res.send("<p>I am a freelance Web Developer and i love put my ideas on the browser..</p>");

  });


  app.get("/DevelopSkills", function(req, res){
    res.send("<ul><li>Html5</li><li>CSS</li><li>JavaScript</li><li>Node.js</li><li>React.js</li>");

  });


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
