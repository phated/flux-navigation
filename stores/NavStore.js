'use strict';

var util = require('util');
var EventEmitter = require('events').EventEmitter;

var _ = require('lodash');
var Router = require('routes/index');

function NavStore(context, initialState){
  EventEmitter.call(this);

  var router = this.router = new Router();

  router.addRoute('/', _.bind(this.index, this));
  router.addRoute('/the-tick', _.bind(this.tick, this));
  router.addRoute('/batman', _.bind(this.batman, this));
  router.addRoute('/favicon.ico', function(){});
}

util.inherits(NavStore, EventEmitter);

NavStore.storeName = 'NavStore';

NavStore.handlers = {
  'NAVIGATE': 'navigate'
};

NavStore.prototype.navigate = function(route, done){
  var match = this.router.match(route);

  if(!match){
    return done(new Error('Route Not Found: ' + route));
  }

  if(global.history && global.history.pushState){
    global.history.pushState({}, '', route);
  }

  this.activeRoute = match.route;
  match.fn(match, done);
};

NavStore.prototype.index = function(match, done){
  var self = this;
  require(['../views/index.jsx'], function(Index){
    self.Page = Index;
    self.emit('change');
    done();
  });
};

NavStore.prototype.batman = function(match, done){
  var self = this;
  require(['../views/batman.jsx'], function(Batman){
    self.Page = Batman;
    self.emit('change');
    done();
  });
};

NavStore.prototype.tick = function(match, done){
  var self = this;
  require(['../views/the-tick.jsx'], function(Tick){
    self.Page = Tick;
    self.emit('change');
    done();
  });
};

module.exports = NavStore;
