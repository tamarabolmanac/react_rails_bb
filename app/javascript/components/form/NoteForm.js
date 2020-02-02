import React from 'react'
import axios from 'axios'

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', content: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title);
    event.preventDefault()
    axios.post(`api/v1/notes`, { title: this.state.title, content: this.state.content })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h3>Title:</h3><br/>
          <input ref="title" type="text" name="title" value={this.state.value} onChange={this.handleChange} /><br/>
          <h3>Content:</h3><br/>
          <textarea ref="content" name="content" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NoteForm