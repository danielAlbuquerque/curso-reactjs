import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

var TextCounter = React.createClass({
	
	getInitialState: function() {
		return {totalChars: 0}
	},

	handleChange: function(event) {
		var element = event.target;
		var text = element.value;
		this.setState({totalChars: text.length});
	},

	render: function() {
		return(
			<div>
				<textarea onChange={this.handleChange}></textarea>
				<div><b>Total:</b> {this.state.totalChars} </div>
			</div>
		)
	}
});

render(
    <TextCounter />,
    document.getElementById('app')
);