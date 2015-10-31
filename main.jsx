
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