import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import Read from "./Read"

const Create = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [username, setUsername] = useState(localStorage.getItem('user'))
  const [getText, setGetText] = useState([])

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
    window.location.reload()

  }

  return (
    <div className="div">
      <div className="body">
        <div className="header">
          <p>CodeLeap network</p>
          <button onClick={handleLogout}>Logout</button>
        </div>


        <form className="box-2" onSubmit={handleSubmit}>

          <h3>What's on your mind?</h3>
          <p>Title</p>
          <input
            value={title}
            onInput={onInput}
            onChange={(e) => setTitle(e.target.value)}></input>
          <p>Content</p>
          <input className="texto"
           value={content}
            onChange={(e) => setContent(e.target.value)}>
          </input>

          <button disabled={!content}>Create</button>

        </form>
        <Read>
        
        </Read>
       
      </div>
    </div>

  )
}


export default Create