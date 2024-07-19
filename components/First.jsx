import React from 'react'
import EvntHandleasProps from './EvntHandleasProps'

function First({movieName}) {
    function hP(){
        alert('Playing '+movieName);
    }
  return (
    <div>
      <EvntHandleasProps onClick={hP}>Play: {movieName}</EvntHandleasProps>
    </div>
  );
}

function Second(){
    return(
        <EvntHandleasProps onClick={() => alert('Uploading')}>Upload Img</EvntHandleasProps>
    );
}


export default function Main() {
    return (
        <div>
            <First movieName="RRR"/>
            <Second/>
        </div>
    )
}