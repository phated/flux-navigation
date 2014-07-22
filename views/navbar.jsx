'use strict';

var React = require('react');

var Navbar = React.createClass({

  navigate: function(evt){
    evt.preventDefault();
    this.props.actions.route(evt.target.pathname);
  },

  render: function(){
    return (
      <div className="pure-menu pure-menu-open pure-menu-horizontal">
        <ul>
          <li>
            <a href="/" onClick={this.navigate}>Home</a>
          </li>
          <li>
            <a href="/batman" onClick={this.navigate}>Batman</a>
          </li>
          <li>
            <a href="/the-tick" onClick={this.navigate}>The Tick</a>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Navbar;
