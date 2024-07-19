// import { useEffect } from "react"

// React Hook: Special function that allows functional components
//             use React features without writing class components
//             (like useState, useEffect, etc)

import React, { useState } from 'react';


function Hooks() {
    // setState is a fun to change the state of value of state var
    // Initial val of name var is set to "Pavi"
    const [name, setName] = useState('Pavi');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)
    const updateName = () => {
        setName("Sam");
    }
    const updateAge = () => {
        setAge(age+1);
    }
    const toggleEmpStatus = () => {
      console.log(isEmployed);
      setIsEmployed(!isEmployed);
    }
  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>SetName</button>
        <p>Age: {age}</p>
        <button onClick={updateAge}>SetAge</button>
        <p>Is Employeed?: {isEmployed ? 'Yes' : 'No'}</p>
        <button onClick={toggleEmpStatus}>setStatus</button>
    </div>
  )
}

export default Hooks
