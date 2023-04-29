import React  from 'react'

const Delete = ({message, handleClose}) => {
   

  return (

    <div className="modalBackground">
        <div className='modalContainer'>
        <h3>{message}</h3>
        <div>
        <button className='btn-close' onClick={handleClose}>Cancel</button>
        <button className='btn-close' onClick={handleClose}>Delete</button>
        </div>
    </div>
    </div>
  )
}

export default Delete
