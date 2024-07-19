import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {name: 'Pavi'};
        console.log('LifeCycle Constructor');
    }
    
    componentDidMount() {
        console.log("LifeCycle componentDid Mount");
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle getDerivedStateFromProps');
        return null;
    }
    
  render() {
    console.log("LifeCycle Render()");
    return (
      <div>
            <h2>Hello There all!!</h2>
      </div>
    )
  }
}

export default LifeCycle
