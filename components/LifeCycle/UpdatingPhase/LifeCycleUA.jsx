import React, { Component } from 'react'
import LifeCycleUB from './LifeCycleUB';

class LifeCycleUA extends Component {
    constructor(props){
        super(props);
        this.state = {name: 'Pavi'};
        console.log('LifeCycleUA Constructor');
    }
    
    componentDidMount() {
        console.log("LifeCycleUA componentDid Mount");
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleUA getSnapshotBeforeUpdate ', this.state.name);
        return null;
    }
    componentDidUpdate() {
        console.log('LifeCycleUA ComponentDidUpdate ',this.state.name)
    }
  render() {
    console.log("LifeCycleUA Render() ", this.state.name);
    return (
      <div>
            <h1>LC-UA</h1>
            <button onClick={() => this.setState({name: 'Sam'})}>ChangeState</button>
            {/* <LifeCycleUB/> */}
      </div>
    )
  }
}

export default LifeCycleUA;
