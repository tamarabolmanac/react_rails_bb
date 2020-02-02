import React from 'react'
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
                <div key={id}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                  <hr />
                </div>
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