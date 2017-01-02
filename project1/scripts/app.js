import React from 'react';
import { render } from 'react-dom';


class TextCounter extends React.Component {

	static defaultProps = {

	}

	state = {
		totalChars: 0
	}

	construtor(props) {

	}

	handleChange = (event) => {
		var element = event.target;
		var totalChars = element.value.length;
		this.setState({totalChars: totalChars});
	}

	render() {
		return(
			<div>
				<textarea onChange={this.handleChange.bind(this)}></textarea>
				<div><b>Total:</b> {this.state.totalChars} </div>
			</div>
		)
	}
}

render(
    <TextCounter />,
    document.getElementById('app')
);