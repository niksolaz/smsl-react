var React = require('react');
var ReactDOM = require('react-dom');

var SmslMessage = React.createClass({
	displayName:'SmslMessage',

	render:function(){
		return (
			React.createElement('div',{classaName:"smslMessage"},
				" Welcome on Smsl !!!"
			)
		);
	}
});

ReactDOM.render(
	React.createElement(SmslMessage,null),
	document.getElementById('content')
);

module.exports = content;