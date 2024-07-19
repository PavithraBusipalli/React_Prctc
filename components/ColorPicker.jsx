import React, {useState} from 'react'

function ColorPicker() {
    const [color, setColor] = useState('#00ff00');
    function handleSetColor(event) {
        setColor(event.target.value);
    }
  return (
    <div>
        <div className='card'>
            <h2>Color Picker</h2>
            <p style={{backgroundColor: color}}>My Color: Hey I'm {color} color</p>
            <p>Select a Color:</p>
            <input type='color' value={color} onChange={handleSetColor}/>
        </div>
    </div>
  )
}

export default ColorPicker
