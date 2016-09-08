const React = require('react');

const MyTitle = props => (
	<div>
		<h1 style={{color: props.color}}>
			{props.title}
		</h1>
	</div>
);

/*var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = function(props) {
	return (
		div(null, h1({style: {color: props.color}}, props.title))
	);
}

var MyTitle = React.createClass({
	render() {
		return (div(null, h1(null, 'Check out this component!')));
	}

});*/

module.exports = MyTitle;