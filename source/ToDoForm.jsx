var React = require('react');

module.exports = React.createClass({
	addBtnClick: function() {
		this.props.addToDo();
	},
	render: function(){
		return (
			<p>
				{this.props.name}
				<input
					onChange={this.props.update}
					value={this.props.value}
				/>
				<button onClick={this.addBtnClick}>Add</button>
			</p>
		)
  	}
});