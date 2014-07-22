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
            <h1>Batman</h1>
            <p>
              Batman is a fictional superhero who appears in American comic books published by DC Comics, as well as in a multitude of movies, television shows, and video games. He was created by Bob Kane and Bill Finger in 1939 to capitalize on the superhero craze that began with Superman. Batman is one of DC Comics' most recognizable and profitable characters.
              Batman is a vigilante who wears a bat-like costume and fights violent criminals in the fictional city of Gotham. He is a brilliant detective and formidable martial artist. Batman's real name is Bruce Wayne, a billionaire industrialist. When he was a child, his parents were murdered by a common mugger, and he fights criminals to avenge their deaths.
            </p>
          </div>
          <div className="pure-u-2-3">
            <img src="http://static.comicvine.com/uploads/original/11116/111164870/3847551-9865926659-batma.jpg" className="pure-img" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Index;
