import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ()=>{

    const navigate = useNavigate()
    const [login, setLogin] = useState("")
    const [logged, setLogged] = useState(false)
    

    const onInput = (e)=> setLogin(e.target.value)

      const handleSubmit = (e)=>{
        e.preventDefault()

        navigate('/user')
        const data = {login}
        localStorage.setItem('user', JSON.stringify(data))
        setLogged(true)
        setLogin('')

  
    }

    const handleLogout = ()=>{
        localStorage.removeItem('user')
        setLogged(false)
    }

 return(
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


}
export default Login