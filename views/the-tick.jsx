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
            <h1>The Tick</h1>
            <p>
              The Tick is a fictional character created by cartoonist Ben Edlund in 1986 as a newsletter mascot for the New England Comics chain of Boston area comic stores. He is an absurdist spoof of comic book superheroes. After its creation, the character spun off into an independent comic book series in 1988, and gained mainstream popularity through an animated TV series on Fox in 1994. A short-lived live-action TV series, video game, and various merchandise have also been based on the character. IGN's list of the Top 100 Comic Book Heroes of All Time ranked The Tick as #57.
            </p>
          </div>
          <div className="pure-u-2-3">
            <img src="http://guiriguidetoprague.com/wp-content/uploads/2011/06/tick.jpg" className="pure-img" />
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Index;
