import React from 'react'

function ListMaker(props) {
    const fruits = props.frts.map( val => {
        return <h1 key={val.name}>{val.name} {val.age}</h1>
    })
  return (
    <div>
        {fruits}
    </div>
  )
}

export default ListMaker
