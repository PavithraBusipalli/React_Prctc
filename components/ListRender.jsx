import React from 'react';
import ListMaker from './ListMaker';

function ListRender() {
    // let fruits = ['apple', 'pineapple', 'banana'];
    let child = [
        {name: 'pavi', age: 2},
        {name: 'sam', age: 1},
    ]
  return (
    <div>
        <ListMaker frts = {child}/>
    </div>
  )
}

export default ListRender
