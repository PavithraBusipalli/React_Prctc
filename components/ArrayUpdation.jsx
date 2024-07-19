import React, { useState } from 'react'

function ArrayUpdation() {
    const [pets, setArray] = useState(['Puppy', 'Cat', 'Snoopy']);
    function handleButton(){
        const pet = document.getElementById('mypet').value;
        document.getElementById('mypet').value = "";
        // setArray([...pets, pet]);
        setArray( pre => [...pre, pet]);
    }
    function RemoveItem(index) {
        setArray(pets.filter((_,i) => i !== index));
    }
  return (
    <div>
        <p>Fav Pet:</p>
        <h4>
        {
            pets.map((mypet, index) => <li key={index} onClick={() => RemoveItem(index)}>{mypet}</li>)
        }
        </h4>
        <input id='mypet' type='text'placeholder='Favourite Pet ?'/>
        <button onClick={handleButton}>Add</button>
    </div>
  )
}

export default ArrayUpdation
