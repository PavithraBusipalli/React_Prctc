import React from 'react';
import { useState } from 'react';
import {sculptureList} from './Data'


function State() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowmore] = useState(false);
    const next = index<sculptureList.length-1;
    // const mylist = sculptureList.map((val, ind) => <li key={ind}>{val.name}</li>)
    const handleNext = () => {
        if(next){
            setIndex(index + 1);
        }
        else{
            setIndex(0);
        }
    }
    const handleShow = () => {
        setShowmore(!showMore);
    }
    console.log(index);
  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <h2>{sculptureList[index].name} by {sculptureList[index].artist}</h2>
      <button onClick={handleShow}>{showMore ? 'Hide' : 'Show'} Details</button>
      <br/><br/>
      <img src={sculptureList[index].url} />
      <br/>
      {showMore && sculptureList[index].description}
    </div>
  )
}

export default State;
