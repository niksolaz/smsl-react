var SmslMainPage = React.createClass({
	render: function(){
		return (
			<div className="smslMain">
				<h1>Welcome Smsl</h1>
			</div>
		);
	}
});

ReactDOM.render(
	<SmslMainPage />,
	document.getElementById("smslContent")
);