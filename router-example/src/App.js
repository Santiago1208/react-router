import React from 'react';

import Form from './components/Form'
import List from './components/List'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state= {
			users: ["user 1", "user 2", "user 3"]
		}
		// this.handleNewUser = this.handleNewUser.bind(this)
	}

	handleNewUser(newUser) {
		const newList = this.state.users
		newList.push(newUser)
		this.setState({users: newList})
		// this.setState(prevState => {
		//	return { users: prevState.push(newUser)}
		//})
	}

	render() {
		return (
			<div className="container">
				<Form newUserListener={this.handleNewUser.bind(this)}></Form>
				<List users={this.state.users}>

				</List>
			</div>
		);
	}
}
 
export default App;
