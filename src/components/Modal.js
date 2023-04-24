import React, { useState } from 'react'

const Modal = ({closeModal,onSubmit, defaultValue}) => {

    const [formState, setFormState] = useState(defaultValue || {title:"", content:""})

   const handleChange = (e)=>{
        setFormState({
        ...formState, 
        [e.target.name]:e.target.value
    })
    }

    const validateForm = ()=>{
        if(formState.title && formState.content){
            return true
        }else{
            return false
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!validateForm()) return


        onSubmit(formState)
        closeModal()
    }
  return (
    <div className='modalBackground' onSubmit={onSubmit}>
     <div className='modalContainer'>
        <div className='title'>
            <input placeholder='edit text' name='title' value={formState.title} onChange={handleChange}></input>
        </div>
        <div className='content'>
            <input placeholder='edit content' name='content' value={formState.content} onChange={handleChange}></input>
        </div>
        <button onClick={()=>closeModal(false)}>Cancel</button>
        <button onClick={()=>handleSubmit}>confirm</button>
     </div>
    </div>
  )
}

export default Modal
