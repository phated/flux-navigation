'use strict';

var React = require('react');

var Navbar = require('./navbar.jsx');

var Index = React.createClass({
  render: function(){
    return (
      <div>
        <Navbar actions={this.props.actions} />

        <div className="pure-g">
          <div className="pure-u-1-3">
            <h1>Superheros</h1>
            <p>
              A superhero (sometimes rendered super-hero or super hero) is a type of hero or saviour possessing extraordinary talents, supernatural phenomena, or superhuman powers and dedicated to protecting the public. A female superhero is sometimes called a superheroine (also rendered super-heroine or super heroine).
              While the word "superhero" itself dates to at least 1917, the term "Super Heroes" is a typography-independent 'descriptive' USA trademark which is co-owned by DC Comics and Marvel Comics.
            </p>
          </div>
          <div className="pure-u-2-3">
            <img src="http://cdn3-www.craveonline.com/assets/uploads/2013/07/Superheroes.jpg" className="pure-img" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Index;
