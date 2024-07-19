import React, { useState } from 'react'

function UpdateArrayOfObj() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
      const newCar = {
        year: carYear,
        make: carMake,
        model: carModel
      };
      setCars(c => [...c, newCar]);
      console.log(cars);
    }
    function handleRemoveCar(index) {
      setCars(cars.filter((val, ind) => ind!=index))
    }
    function handleYearChange(event) {
      setCarYear(event.target.value);
    } 
    function handleMakeChange(event) {
      setCarMake(event.target.value);
    }
    function handleModelChange(event) {98
      setCarModel(event.target.value);
    }
  return (
    <div>
      <h2>List Of Car Objects</h2>
      <ul>
          {
            cars.map((car, index) => 
              <li key={index} onClick={() => handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
              </li>
            )
          }
      </ul>
        {/* <input type='text' onChange={handleAddCar} value={cars}/> */}
        <br/>
        <input type='number' onChange={handleYearChange} value={carYear}/>
        <p>Year: {carYear}</p>
        <br/>
        <input type='text' onChange={handleMakeChange} value={carMake} placeholder='Enter Car Make'/>
        <p>Make: {carMake}</p>
        <br/>
        <input type='text' onChange={handleModelChange} value={carModel} placeholder='Enter Car Model'/>
        <p>Model: {carModel}</p>
        <br/>
        <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default UpdateArrayOfObj
