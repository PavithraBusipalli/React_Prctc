import React, {useState} from 'react';

function Count() {
    const [c, setCount] = useState(0);
    const handleCount = () => {
        setCount(c+1);
    }
    const handleCount3 = () => {
        setCount(c+1);
        setCount(c => c + 2);
    }
    console.log('c: ',c);
  return (
    <div>
        <h2>{c}</h2>
      <button onClick={handleCount}>+1</button>
      <button onClick={handleCount3}>+3</button>
    </div>
  )
}

export default Count
