#!/bin/bash
var express = require('express');
var cluster = require('express-cluster');


cluster(function(worker) {
  var app = express();
  var fs = require('fs');

  app.get('/', function (req, res) {
    console.log("Index request");
    res.set('Connection', 'close');
    res.sendFile(__dirname + "/index.html");
  });

  app.get("/img/:id", function(req, res) {
    file = fs.readFileSync(__dirname + "/a.jpeg");
    res.set('Connection', 'close');
    res.send(file);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
}, {count: 5});
