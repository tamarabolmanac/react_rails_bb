import React from 'react'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Note extends React.Component {

	constructor(props) {
    super(props);

    this.confirm = this.confirm.bind(this);
  }

	confirm() {
		confirmAlert({
      title: 'Delete note: '.concat(this.props.title),
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.handleDelete()
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
	}

	render() {
		return(
			<div>
				<h4> {this.props.title}</h4>
				<p> {this.props.content} </p>
				<button onClick={this.confirm}>Delete</button>
				<hr/>
			</div>
			);
	}
}

export default Note