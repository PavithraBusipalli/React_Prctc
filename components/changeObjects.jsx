import React, { useState } from 'react'

function changeObjects() {
    const [car, setCar] = useState({
        name: 'Lambargini',
        year: 2024,
        status: 'Yes'
    })
    function handleName(event) {
        // Both are doing the same functionality
        setCar({...car, name: event.target.value});
        // setCar(c => ({...c, name: event.target.value}))
    }
    function handleYear(event) {
        setCar({...car, year: event.target.value});
    }
    function handleStatus(event) {
        setCar({...car, status: event.target.value});
    }
  return (
    <div>
        <p>Car Name: {car.name} introduced in : {car.year} with status: {car.status}</p>
        <input value={car.name} onChange={handleName} type='text' />
        <br/>
        <input value={car.year} onChange={handleYear} type='number' />
        <br/>
        <input value={car.status} onChange={handleStatus} type='text' />
    </div>
  )
}

export default changeObjects
