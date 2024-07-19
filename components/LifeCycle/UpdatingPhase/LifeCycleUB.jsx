import React, { Component } from 'react'

class LifeCycleUB extends Component {
    constructor(props){
        super(props);
        console.log('LifeCycleUB Constructor');
    }
    
    componentDidMount() {
        console.log("LifeCycleUB componentDid Mount");
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleUB getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('LifeCycleUB ComponentDidUpdate')
    }
    
  render() {
    console.log("LifeCycleUB Render()");
    return (
      <div>
        <h2>LC-UB</h2>
      </div>
    )
  }
}

export default LifeCycleUB;
