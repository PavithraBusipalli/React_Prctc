import React from 'react'

// Readin Props in Event Handlers
function AlertButton({msg, children}) {
  return (
    <div>
      <h2>MSG: {msg} + Child: {children}</h2>
      <button onClick={() => alert(msg)}>{children}</button>
    </div>
  )
}

export default AlertButton
