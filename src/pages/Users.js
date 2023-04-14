import { useState } from "react"

const Users = ()=>{

  
  let {values, setValues} = useState(forms)

  const forms = {
    title:'',
    content: ''
  }

  const formManipulator = (e) =>{
    e.preventDefault()
    addEedit(values)

    let {title, value} = e.target

    setValues({
      ...values,
      [title]:value

    })

  }

  const onInput = (e)=> setValues(e.target.value)
  const handleLogout = ()=>{
    localStorage.clear()
    window.location.reload()
    
  }

  const addEedit = obj =>{

  }

  
 return(
  <div className="div">
    <div className="body">
  <div className="header">
    <p>CodeLeap network</p>
    <button onClick={handleLogout}>Logout</button>
  </div>
  
  
    <form className="box-2" addEedit={addEedit} onSubmit={formManipulator}>

      <h3>What's on your mind?</h3>
      <p>Title</p>
      <input 
        value={values} 
        onInput={onInput} 
        onChange={formManipulator}></input>
      <p>Content</p>
      <input className="texto"
      onChange={formManipulator}
      ></input>
      <button disabled={!values} onChange={formManipulator}>Create</button>

    </form>
   </div>
   </div>
  
)   
}




export default Users