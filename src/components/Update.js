import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Update = ({onRequestClose}) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [id, setId] = useState([])
    

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setTitle(localStorage.getItem('title'));
        setContent(localStorage.getItem('content'));
    }, [])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
          const response = await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`,{
            id,
            title,
            content
                
          })
          console.log(response.data)
          setTitle('')
          setContent('')
          setId('')
          onRequestClose()
          
        } catch (error) {
          console.log(error)
        }
      }
  return (
 
      <form className="modalBackground" onSubmit={handleSubmit}>
      <div className='modalContainer'>
                <h2>Edit Item</h2> 
          <div className='title'>
          <p className='names'>Title</p>
          <input className="input-title"
            value={title}
            
            onChange={(e) => setTitle(e.target.value)}>
          </input>
          </div>
          <div className='content'>
          <p className='names'>Content</p>
          <input className="input-content"
           value={content}
            onChange={(e) => setContent(e.target.value)}>
          </input>
          </div>
          <div className='update'>
          <button className='btn-update-cancel' onClick={()=>onRequestClose}>Cancel</button>
          <button className='btn-update' disabled={!content} onClick={handleSubmit}>Save</button>
          </div>
         </div>
        </form>
        
      
   
  )
}

export default Update
