import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props){
        super(props);
        this.state = {name: 'Pavi'};
        console.log('LifeCycleB Constructor');
    }
    
    componentDidMount() {
        console.log("LifeCycleB componentDid Mount");
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps');
        return null;
    }
    
  render() {
    console.log("LifeCycleB Render()");
    return (
      <div>
            <h2>Hello There all!! from LC-B</h2>
      </div>
    )
  }
}

export default LifeCycleB;
