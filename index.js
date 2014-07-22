'use strict';

var http = require('http');

var webpackConfig = require('./webpack.config');
var er = require('enhanced-require')(module, webpackConfig);

var app = er('./server');

var PORT = process.env.PORT || 8080;

http.createServer(app).listen(PORT, function(err){
  if(err){
    console.error(err);
    throw err;
  }

  console.log('Server listening on http://localhost:' + PORT);
});
