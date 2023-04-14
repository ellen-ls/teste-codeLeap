import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from "./Users";


const Login = ()=>{

    
    const [login, setLogin] = useState("")
    const [logged, setLogged] = useState(false)
    

    const onInput = (e)=> setLogin(e.target.value)

      const handleSubmit = (e)=>{
       
        localStorage.setItem('user', JSON.stringify(login))
        setLogged(true)
       

  
    }

    return(
      (logged ? <Users/>:
      <form className="rectangle" onSubmit={handleSubmit}>
        <div className="box">
        <h2>Welcome to CodeLeap network!</h2>
        <h4>Please enter your username</h4>
        <input 
        value={login} 
        onInput={onInput} 
        onChange={(event)=>setLogin(event.target.value)}
        />
        <button 
        disabled={!login} 
        >Submit
        </button>
        </div>

      </form>
   
    )
    )

}
export default Login