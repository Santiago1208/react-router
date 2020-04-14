import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			textValue: 'Hello world'
		}
	}

	handleInputText(event) {
		const newState = {
			[event.target.id]: event.target.value
		}
		this.setState(newState)
	}

	handleFormSubmit(event) {
		event.preventDefault() // Aviod page refresh
		// 1. Recover input text
		const text = this.state.textValue
		// 2. Send new User
		this.props.newUserListener(text)
	}

	render() { 
		return (
			<form onSubmit={this.handleFormSubmit.bind(this)}>
				<input id="textValue" type="text" onChange={this.handleInputText.bind(this)} value={this.state.textValue}/>
				<button type="submit">Click me</button>
			</form>
		);
	}
}
 
export default Form;
