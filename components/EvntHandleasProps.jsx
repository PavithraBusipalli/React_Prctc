import React, {useState} from 'react'
import First from './First';

// function EvntHandleasProps({onClick, child}) {
//   return (
//     <div>
//         <button onClick={onClick}>{child}</button> 
//     </div>
//   )
// }

function EvntHandleasProps(){
    const [isSent, setIsSent] = useState(false);
    const [msg, setMessage] = useState('Hi');
    const [walk, setWalk] = useState(true);
    function handleClick() {
        alert(walk);
        setWalk(!walk);
    }
    if(isSent){
        return <h1>Your msg is on its way!</h1>
    }
    return (
        // <form onSubmit={(e) => {
        //     e.preventDefault();
        //     setIsSent(true);
        //     setMessage(msg);
        // }}>
        //     <textarea placeholder='message' value={msg} onChange={e=> setMessage(e.target.value)}/>
        //         <button type='submit'>Send</button>
        // </form>
        <>
        <button onClick = {handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
        <h1 style={{color: walk ? 'darkgreen' : 'darkred'}}>{walk ? 'Walk' : 'Stop'}</h1>
        </>
    )
}

export default EvntHandleasProps
