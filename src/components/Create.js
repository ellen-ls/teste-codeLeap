import axios from "axios"
import React from "react"
import { useState } from "react"
import Read from "./Read"
import { useNavigate } from "react-router-dom"


const Create = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [username, setUsername] = useState(localStorage.getItem('user'))
  
  

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post("https://dev.codeleap.co.uk/careers/",{
        username,
        title,
        content
            
      })
      console.log(response.data)
      setTitle('')
      setContent('')
      setUsername('')
      
    } catch (error) {
      console.log(error)
    }
  }

  const onInput = (e) => setTitle(e.target.value)
  const handleLogout = () => {
    localStorage.clear()
    navigate('/')

  }

  return (
    <div className="div">
      <div className="header">
      <p>CodeLeap network</p>
      <button onClick={handleLogout}>Logout</button>
      </div>
      <form className="box-2" onSubmit={handleSubmit}>
               
          <h3>What's on your mind?</h3>
          <div>
          <p>Title</p>
          <input className="input-title"
            value={title}
            onInput={onInput}
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
          <button disabled={!content}>Create</button>

        </form>
        <div>
        <Read/>
        </div> 
      </div>
    

  )
}


export default Create