import React from 'react'

class Note extends React.Component {


	render() {
		return(
			<div>
				<h4> {this.props.title}</h4>
				<p> {this.props.content} </p>
				<button onClick={this.props.handleDelete}>Delete</button>
				<hr/>
			</div>
			);
	}
}

export default Note