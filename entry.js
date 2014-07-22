'use strict';

var React = require('react');

var bootstrap = require('./bootstrap');

var route = window.location.pathname;

bootstrap(route, function(err, component){
  if(err){
    throw err;
  }

  window.component = React.renderComponent(component, document.getElementById('mount'));
  window.actions = window.component.props.actions;
});
