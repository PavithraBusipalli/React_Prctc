import React from 'react'
import Img from '../assets/desk1.jpg';

// function EventHandle() {
//     // const imgurl = Img;
//     // const handleButtonEvent = (e) => {
//     //     console.log(e.target.name);
//     //     e.target.style.display = 'none';
//     // }
//   return (
//     <div>
//         {/* <img onClick={handleButtonEvent} src={Img}></img> */}
//         <button onClick={() => alert('Hello')}>Click Me</button>
//     </div>
//   )
// }

function EventHandle({onclick, children}) {
  return (
    <button onClick={onclick}>
      {children}
    </button>
  )
}

function PlayButton({name}){
  return (
    <EventHandle onClick={() => alert('Playing'+name)}>Play</EventHandle>
  )
}

function Uploading(){
  function handleUpload() {
    alert('uploading');
  }
  return (
    <EventHandle onClick={() => alert('Uploading')}>
      Upload
    </EventHandle>
  )
}

export default function Tool(){
  return (
    <>
    <PlayButton name="RRR"/>
    <Uploading/>
    </>
  )
}
export {EventHandle};


// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }


function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
