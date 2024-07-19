import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [resource, setResourceType] = useState('Ntg');
    useEffect(() => {
        document.title = resource;
    }, [resource])
  return (
    <div>
        <button onClick={() => setResourceType('Posts')}>Posts</button>
        <button onClick={() => setResourceType('Users')}>Users</button>
        <button onClick={() => setResourceType('Comments')}>Comments</button>
        <h2>Resource: {resource}</h2>
    </div>
  )
}

export default UseEffect
