'use strict';

// React/Flux bootstrap
var React = require('react');
var bootstrap = require('./bootstrap');

// Gross Express stuff
var express = require('express');
var cons = require('consolidate');

var app = express();

app.set('view engine', 'hbs');
app.set('view cache', false);
app.engine('hbs', cons.handlebars);

// Awesome Webpack stuff
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');

var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));

app.use(function(req, res, next){
  bootstrap(req.url, function(err, component){
    if(err){
      return next(err);
    }

    res.render('layout', {
      html: React.renderComponentToString(component)
    });
  });
});


module.exports = app;
