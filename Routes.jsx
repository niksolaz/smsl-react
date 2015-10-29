/* @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Index = require('./components/Index.jsx');
var About = require('./components/About.jsx');

var Routes = (
  <Route>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About}/>
  </Route>
);

module.exports = Routes;