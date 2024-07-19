import React, { useState } from 'react'

function FunctionCounter() {
    const [count, setCount] = useState(100);
    function Incrmnt() {
        // setCount(count => {count = count+1; console.log(this);});
        setCount(count => count+1);
        setCount(count => count+1);
    }
    const Reset = () => {
        setCount(0);
    }
    const Decrmnt = () => {
        setCount(count-1);
    }
  return (
    <div>
      <center>
        <h2 className='displayCount'>Count: {count}</h2>
        <div className='block'> 
            <button className='btn' onClick={Incrmnt}>Incr</button>
            <button className='btn' onClick={Reset}>Reset</button>
            <button className='btn' onClick={Decrmnt}>Decr</button>
        </div>
      </center>
    </div>
  )
}

export default FunctionCounter
