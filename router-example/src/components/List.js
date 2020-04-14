import React from 'react'

class List extends React.Component {
	render() { 
		return (
			<ul>
				{this.props.users.map(user => <li>{user}</li>)}
			</ul>
		);
	}
}
 
export default List;
