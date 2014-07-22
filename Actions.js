'use strict';

var constants = {
  NAVIGATE: 'NAVIGATE'
};

function Actions(dispatcher){
  this.dispatcher = dispatcher;
}

Actions.prototype.route = function(route, done){
  this.dispatcher.dispatch(constants.NAVIGATE, route, done);
};

Actions.prototype.getStore = function(store){
  return this.dispatcher.getStore(store);
};

module.exports = Actions;
