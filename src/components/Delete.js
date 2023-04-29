import React  from 'react'

const Delete = ({message}) => {
   

   
  return (

    <div className="modalBackground">
        <div className='modalContainer'>
        <h3>{message}</h3>
        <div>
        <button>Cancel</button>
        <button>Delete</button>
        </div>
    </div>
    </div>
  )
}

export default Delete
