var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			complete: false	
		};
	},
	setComplete: function() {
		this.setState({
			complete: !this.state.complete
		});
	},
	render: function(){
		var content;
		if (this.state.complete) {
			content = <s>{this.props.name}</s>;
		} else {
			content = <em>{this.props.name}</em>
		}
		return (
			<div onClick={this.setComplete}>
				{content}
			</div>
		);
  	}
});