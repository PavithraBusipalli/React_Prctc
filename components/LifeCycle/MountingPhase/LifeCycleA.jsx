import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props){
        super(props);
        this.state = {name: 'Pavi'};
        console.log('LifeCycleA Constructor');
    }
    
    componentDidMount() {
        console.log("LifeCycleA componentDid Mount");
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
    }
    
  render() {
    console.log("LifeCycleA Render()");
    return (
      <div>
            <h2>Hello There all!! from LC-A</h2>
            <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycleA;
