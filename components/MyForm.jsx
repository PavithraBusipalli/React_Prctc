import React, { Component } from 'react'

export class MyForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            comments: ''
        }
    }
    handleName = (event) =>{
        this.setState({name: event.target.value});
    }
    handleComments = (event) =>{
        this.setState({comments: event.target.value});
    }
    handleFormSubmit = event => {
        alert(this.state.name + this.state.comments)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
            <label>Name </label>
            <input type='text' value={this.state.name} onChange={this.handleName}/>
            <br/>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleComments}/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default MyForm
