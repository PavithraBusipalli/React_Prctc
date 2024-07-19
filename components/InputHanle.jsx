import React from 'react'

function InputHanle() {
  var val;
    const handleName = (event) => {
        event.preventDefault();
        val =  event.target.value;
    }

  return (
    <div>
        <input type='text' id='name' placeholder='name' onChange={handleName}/>
        <h2>val: {val}</h2>
    </div>
  )
}

export default InputHanle
