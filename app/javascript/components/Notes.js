import React from 'react'
import Note from './Note'
import axios from 'axios'


class Notes extends React.Component {

	state = {
		notes: [],
		isLoading: true,
		errors: null
	};

	getNotes() {
		axios
		.get(`api/v1/notes.json`)
		.then(response => {
	        this.setState({
	          notes: response.data,
	          isLoading: false
	        });
      	})
      	// If we catch any errors connecting, let's update accordingly
      	.catch(error => this.setState({ error, isLoading: false }));
	}

	componentDidMount() {
		this.getNotes();
	}

	handleDelete(id){
		
		axios
		.delete(`api/v1/notes/${id}`)
		.then(res => {
	    this.setState({notes: this.state.notes.filter(x=> x.id!=id)})
    })
	}


	render() {
		const notes = this.state.notes;
		const isLoading = this.state.isLoading;

		return (
			<React.Fragment>
        <h1> Notes </h1>
        <div>
          {!isLoading ? (
            notes.map(note => {
              const { id, title, content } = note;
              return (
                <Note key={id} title={title} content={content} handleDelete={this.handleDelete.bind(this, id)} />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </React.Fragment>
		);
	}
}

export default Notes