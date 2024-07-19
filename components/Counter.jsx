import React, { Component } from 'react'
import { useState } from 'react';

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    Increment = () => {
      // setState takes an Obj as argument
        this.setState({count: this.state.count+1})
    }
    Decrement = () => {
      this.setState({count: this.state.count-1});
    }
    Reset = () => {
      this.setState({count: 0});
    }
  render() {
    return (
      <div>
            <h1 className='displayCount'>Count: {this.state.count}</h1>
            <div className='block'>
            <button className='btn' onClick={this.Increment}>Inc</button>
            <button className='btn' onClick={this.Reset}>Reset</button>
            <button className='btn' onClick={this.Decrement}>Dec</button>
            </div>
      </div>
    )
  }
}

export default Counter
