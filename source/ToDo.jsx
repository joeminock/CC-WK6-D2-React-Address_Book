var React = require('react');
var ToDoItem = require('./ToDoItem.jsx');
var ToDoForm = require('./ToDoForm.jsx');

module.exports = React.createClass({
	getInitialState : function() {
		return {
			items: ["learn react", "learn angular", "learn to code"],
			input: ""
		}	
	},
	updateForm: function(evt) {
		this.setState({
			input: evt.target.value
		});
	},
	addToDo: function() {
		var newItems = this.state.items;
		newItems.push(this.state.input);
		this.setState({
			items: newItems,
			input: ""
		});
	},
	render: function(){
		return (
			<div>
				{this.state.items.map(function(item) {
					return <ToDoItem name={item} key={item} />
				})}
     			<ToDoForm
     				update={this.updateForm}
     				value={this.state.input}
     				addToDo={this.addToDo}/>
      		</div>
		)
  	}
});