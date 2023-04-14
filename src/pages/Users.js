import { useState } from "react"

const Users = ()=>{

  const [title, setTitle] = useState("")
  

  const onInput = (e)=> setTitle(e.target.value)
  const handleLogout = ()=>{
    localStorage.clear()
    window.location.reload()
  }

  

 
 return(
  <div className="div">
    <div className="body">
  <div className="header">
    <p>CodeLeap network</p>
    <button onClick={handleLogout}>Logout</button>
  </div>
  
  
    <div className="box-2">

      <h3>What's on your mind?</h3>
      <p>Title</p>
      <input 
        value={title} 
        onInput={onInput} 
        onChange={(event)=>setTitle(event.target.value)}></input>
      <p>Content</p>
      <input className="texto"
      ></input>
      <button disabled={!title}>Create</button>

    </div>
   </div>
   </div>
  
)   
}




export default Users