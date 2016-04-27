#!/bin/bash
var express = require('express');
var cluster = require('express-cluster');


cluster(function(worker) {
  var app = express();
  var fs = require('fs');

  app.get('/', function (req, res) {
    res.sendfile("/Users/dhimil/much-server/index.html");
  });

  app.get("/img/:id", function(req, res) {
    file = fs.readFileSync("/Users/dhimil/much-server/a.jpeg");
    res.send(file);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
}, {count: 5});
