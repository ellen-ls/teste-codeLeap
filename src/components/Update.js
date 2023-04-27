import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Update = () => {

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
          
        } catch (error) {
          console.log(error)
        }
      }
  return (

    
    <div>
         <div className="div">
         
      </div>
      <form className="box-2" onSubmit={handleSubmit}>
            
          <div>
          <p>Title</p>
          <input className="input-title"
            value={title}
            
            onChange={(e) => setTitle(e.target.value)}>
          </input>
          </div>
          <div>
          <p>Content</p>
          <input className="input-content"
           value={content}
            onChange={(e) => setContent(e.target.value)}>
          </input>
          </div>
          <button disabled={!content} onClick={handleSubmit}>Update</button>

        </form>
        <div>
       
        </div> 
      </div>
   
  )
}

export default Update
