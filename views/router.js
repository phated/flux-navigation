'use strict';

var React = require('react');

var Router = React.createClass({
  displayName: 'Router',

  getInitialState: function(){
    return this.getStore();
  },

  componentWillMount: function(){
    var store = this.getStore();
    store.on('change', this.updateState);
  },

  componentWillUnmount: function(){
    var store = this.getStore();
    store.removeListener('change', this.updateState);
  },

  getStore: function(){
    return this.props.actions.getStore('NavStore');
  },

  updateState: function(){
    this.setState(this.getStore());
  },

  render: function(){
    return this.state.Page({ actions: this.props.actions });
  }
});

module.exports = Router;
