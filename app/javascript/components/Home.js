import React from 'react'
import NoteForm from './form/NoteForm.js'

class Home extends React.Component {
	render() {
		return (
			<div> 
				<h1>Leave your notes... </h1> 
				<NoteForm/>
			</div>
		)
	}
}	

export default Home