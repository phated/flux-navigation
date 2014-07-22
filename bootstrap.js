'use strict';

var Dispatchr = require('dispatchr')();

var NavStore = require('./stores/NavStore');
Dispatchr.registerStore(NavStore);

var Actions = require('./Actions');

var Router = require('./views/router');

function bootstrap(route, cb){
  var dispatcher = new Dispatchr({});
  var actions = new Actions(dispatcher);

  actions.route(route, function(err){
    if(err){
      return cb(err);
    }

    cb(null, Router({ actions: actions }));
  });
}

module.exports = bootstrap;
