
var SmslMessage = React.createClass({
  render: function() {
    return (<div>Welcome to {this.props.name}</div>);
  }
});

ReactDOM.render(
	<SmslMessage name="Smsl" />,
	document.getElementById("smslContent")
);